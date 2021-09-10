// 第三方
import { memo } from 'react';
import { useAppDispatch } from '@/hooks';
import { changeAuthingPanel } from '@/store/ui/action';
// 组件
import { Button } from 'antd';
import { GuardScenes } from '@authing/react-ui-components'; // 登录框


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
        view: GuardScenes.Register,
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
