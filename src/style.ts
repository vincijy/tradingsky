
import { createGlobalStyle } from 'styled-components';
import rusty from '@assets/ttf/rusty.jpg';

export const FontStyle = createGlobalStyle `
@font-face
{
  font-family: "Rusty - Demo";
  src: url(${rusty});
}`;

