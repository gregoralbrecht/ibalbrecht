import { createGlobalStyle } from './index'

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html,
  body {
    min-height: 100%;
    min-width: 320px !important;
    padding: 0;
    margin: 0;
    background: hsl(210, 17%, 98%);
  }
`

export default GlobalStyles
