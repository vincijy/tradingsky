import * as React from 'react';
import ReactDOM from 'react-dom';
import { useEffect } from 'react';
interface WapperState {
  Component:React.ComponentClass | null;
}


// todo 优化这个dc函数，使用loadable库用以替换
/**
 * @param {Function} loadComponent e.g: () => import('./component')
 * @param {ReactNode} placeholder  未加载前的占位
 */
export const dynamicComponent = (loadComponent:any, exportComponent?:string) => {
  class AsyncComponent extends React.PureComponent<any, WapperState> {
    constructor(props:any, context:any) {
      super(props, context);

      this.state = {
        Component: null,
      };
    }

    public set isMounted(status:boolean) {
      this.isFullyMounted = status;
    }

    public get isMounted() {
      return this.isFullyMounted;
    }

    componentWillUnmount() {
      this.isMounted = false;
    }

    private isFullyMounted = true;

    async componentDidMount() {
      const component = await loadComponent();
      if (!this.isMounted) { return; }
      if (exportComponent) {
        component.default = component[exportComponent];
      }
      this.isMounted && this.setState({
        Component: component.default,
      });
    }

    render() {
      const { Component } = this.state;
      return (
        Component ? <Component {...this.props} /> : <div />
      );
    }
  }

  return AsyncComponent;
};

export const useDynamicRender = (el:React.FunctionComponentElement<any>, toMountedDomId:string) => {
  const isInView = (el:Element):boolean => {
    const bound = el.getBoundingClientRect();
    const clientHeight = window.innerHeight;
    // if top edge of el is smaller than clientHeight
    // --------
    //   --bound.top
    // --------clientHeight
    //   --
    // why 20? in mobile client we can not scroll to bottom of document, thus
    // causing bound can not be in view
    // so not to be so exactly
    return bound.top - 20 <= clientHeight;
  };
  const lazyRender = (el:React.FunctionComponentElement<any>, root:Element):void => {
    // do not render repeatly
    if (root.children.length > 0) {
      return;
    }
    ReactDOM.render(
      el,
      root,
      () => {
        //
      },
    );
  };
  useEffect(() => {
    const root = document.querySelector(`#${toMountedDomId}`);
    if (!root) {
      return;
    }
    const handler = () => {
      if (root.children.length > 0) {
        window.removeEventListener('scroll', handler);
      }
      if (isInView(root)) {
        root && lazyRender(el, root);
      }
    };
    handler();
    window.addEventListener('scroll', handler);
    return () => {
      window.removeEventListener('scroll', handler);
    };
  }, [el, toMountedDomId]);
};
