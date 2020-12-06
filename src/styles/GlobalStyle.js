import { createGlobalStyle } from 'styled-components';
import theme from './theme';
import media from './media';
import FontFaces from './fonts';

const { colors, fonts } = theme;

// https://github.com/necolas/normalize.css
const normalize = `
  html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}
`;

const GlobalStyle = createGlobalStyle`
  ${normalize};
  ${FontFaces};

  html {
    box-sizing: border-box;
    width: 100%;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  :root {
    --font-family: ${fonts.Primary};
    --font-family-serif: ${fonts.Secondary};
    --size: 1440;

    ${media.thone`--size: 400;`};
  }

  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    transition: background 0.4s ease;

    --color-text: ${colors.lightMode.text};
    --color-background: ${colors.lightMode.background};
    --color-accent: ${colors.lightMode.accent};
    --color-primary: ${colors.lightMode.primary};

    background: var(--color-background);
    overscroll-behavior-y: none;
  }

  body.dark {
    --color-text: ${colors.darkMode.text};
    --color-background: ${colors.darkMode.background};
    --color-accent: ${colors.darkMode.accent};
    --color-primary: ${colors.darkMode.primary};

    background: var(--color-background);
  }

  h1,h2,h3,h4 {
    font-family: var(--font-family);
  }

  h5,h6,p,a {
    font-family: var(--font-family-serif);
  }

  p {
    line-height: 160%;
  }

  img {
    user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
  }
`;

export default GlobalStyle;
