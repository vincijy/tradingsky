import * as React from 'react';

interface WapperState {
  COMPONENT:React.ComponentClass | null;
}


// todo 优化这个dc函数，使用loadable库用以替换
/**
 * @param {Function} loadComponent e.g: () => import('./component')
 * @param {ReactNode} placeholder  未加载前的占位
 */
export const dynamicComponent = (loadComponent:any, exportComponent?:string) => {
  class AsyncComponent extends React.PureComponent<any, WapperState> {
    private isFullyMounted = true;

    constructor(props:any, context:any) {
      super(props, context);

      this.state = {
        COMPONENT: null,
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

    async componentDidMount() {
      const component = await loadComponent();
      if (!this.isMounted) { return; }
      if (exportComponent) {
        component.default = component[exportComponent];
      }
      this.isMounted && this.setState({
        COMPONENT: component.default,
      });
    }

    render() {
      const { COMPONENT } = this.state;
      return (
        COMPONENT ? <COMPONENT {...this.props} /> : <div />
      );
    }
  }

  return AsyncComponent;
};
