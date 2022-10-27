import React from 'react';
import { Provider } from 'react-redux';
import store from '@store/index';
import 'antd/dist/antd.less';
import { FontStyle } from './style';

const App = ({ element }:{element:React.ReactElement }) => (
  <Provider store={store}>
    <FontStyle />
    <div id='webContent'>
      <div id='authing_root' />
      {element}
    </div>
  </Provider>
);

export default App;
