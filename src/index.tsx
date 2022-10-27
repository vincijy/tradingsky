import { version, name } from '../package.json';
import '@assets/css/global.less';

console.log(
  `%c Welcome to ${name}. Version: %c${version}`,
  'color: blue; font-size: 16px',
  'color: red; font-size: 16px',
);

if (typeof window !== 'undefined') {
  console.log('window');
};
