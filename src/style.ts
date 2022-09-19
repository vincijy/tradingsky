
import { createGlobalStyle } from 'styled-components';
import rusty from '@assets/ttf/rusty.jpg';

export const FontStyle = createGlobalStyle `
ul {
  list-style-type: none;
}
@font-face
{
  font-family: "Rusty - Demo";
  src: url(${rusty});
}`;

