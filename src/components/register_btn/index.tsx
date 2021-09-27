// 第三方
import { memo } from 'react';
import { useAppDispatch } from '@/hooks';
import { changeAuthingPanel } from '@/store/ui/action';
// 组件
import { Button } from 'antd';


interface IState {
  text:string;
  type:'primary' | 'dashed' | 'text' | 'link' | 'ghost' | 'default' | undefined;
}

export default memo(function RegisterButton(props:IState) {
  const { text, type } = props;
  const dispatch = useAppDispatch();
  const show = () => {
    console.log('register show');
    dispatch(changeAuthingPanel({
      authingPanel: {
        visible: true,
        view: 'register',
      },
    }));
  };
  return (
    <Button
      onClick={ show }
      type={type}>
      { text }
    </Button>
  );
});
