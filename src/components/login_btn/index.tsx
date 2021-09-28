import { memo } from 'react';
import { useAppDispatch } from '@/hooks';
import { changeAuthingPanel } from '@/store/ui/action';
import { Button } from 'antd';
import { injectAuthingPanel } from '@/components/authing';

interface IState {
  text:string;
  type:'primary' | 'dashed' | 'text' | 'link' | 'ghost' | 'default' | undefined;
}

export default memo(function LoginButton(props:IState) {
  const { text, type } = props;
  const dispatch = useAppDispatch();
  const show = () => {
    dispatch(changeAuthingPanel({
      authingPanel: {
        visible: true,
        view: 'login',
      },
    }));
    injectAuthingPanel();
  };
  return (
    <Button
      onClick={ show }
      type={type}>
      { text }
    </Button>
  );
});
