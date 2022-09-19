// 第三方
import ReactDOM from 'react-dom';

import { version, name } from '../package.json';

// 本地
import App from './App___';
import '@assets/css/global.less';

console.log(
  `%c Welcome to ${name}. Version: %c${version}`,
  'color: blue; font-size: 16px',
  'color: red; font-size: 16px',
);

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
