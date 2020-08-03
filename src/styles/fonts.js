import { css } from 'styled-components';

import PlusJakartaDisplayBoldTTF from '@fonts/PlusJakartaDisplay/PlusJakartaDisplay-Bold.ttf';
import PlusJakartaDisplayBoldWOFF from '@fonts/PlusJakartaDisplay/PlusJakartaDisplay-Bold.woff';
import PlusJakartaDisplayBoldWOFF2 from '@fonts/PlusJakartaDisplay/PlusJakartaDisplay-Bold.woff2';
import PlusJakartaDisplayBoldItalicTTF from '@fonts/PlusJakartaDisplay/PlusJakartaDisplay-BoldItalic.ttf';
import PlusJakartaDisplayBoldItalicWOFF from '@fonts/PlusJakartaDisplay/PlusJakartaDisplay-BoldItalic.woff';
import PlusJakartaDisplayBoldItalicWOFF2 from '@fonts/PlusJakartaDisplay/PlusJakartaDisplay-BoldItalic.woff2';
import PlusJakartaDisplayLightTTF from '@fonts/PlusJakartaDisplay/PlusJakartaDisplay-Light.ttf';
import PlusJakartaDisplayLightWOFF from '@fonts/PlusJakartaDisplay/PlusJakartaDisplay-Light.woff';
import PlusJakartaDisplayLightWOFF2 from '@fonts/PlusJakartaDisplay/PlusJakartaDisplay-Light.woff2';
import PlusJakartaDisplayLightItalicTTF from '@fonts/PlusJakartaDisplay/PlusJakartaDisplay-LightItalic.ttf';
import PlusJakartaDisplayLightItalicWOFF from '@fonts/PlusJakartaDisplay/PlusJakartaDisplay-LightItalic.woff';
import PlusJakartaDisplayLightItalicWOFF2 from '@fonts/PlusJakartaDisplay/PlusJakartaDisplay-LightItalic.woff2';
import PlusJakartaDisplayMediumTTF from '@fonts/PlusJakartaDisplay/PlusJakartaDisplay-Medium.ttf';
import PlusJakartaDisplayMediumWOFF from '@fonts/PlusJakartaDisplay/PlusJakartaDisplay-Medium.woff';
import PlusJakartaDisplayMediumWOFF2 from '@fonts/PlusJakartaDisplay/PlusJakartaDisplay-Medium.woff2';
import PlusJakartaDisplayMediumItalicTTF from '@fonts/PlusJakartaDisplay/PlusJakartaDisplay-MediumItalic.ttf';
import PlusJakartaDisplayMediumItalicWOFF from '@fonts/PlusJakartaDisplay/PlusJakartaDisplay-MediumItalic.woff';
import PlusJakartaDisplayMediumItalicWOFF2 from '@fonts/PlusJakartaDisplay/PlusJakartaDisplay-MediumItalic.woff2';
import PlusJakartaDisplayRegularTTF from '@fonts/PlusJakartaDisplay/PlusJakartaDisplay-Regular.ttf';
import PlusJakartaDisplayRegularWOFF from '@fonts/PlusJakartaDisplay/PlusJakartaDisplay-Regular.woff';
import PlusJakartaDisplayRegularWOFF2 from '@fonts/PlusJakartaDisplay/PlusJakartaDisplay-Regular.woff2';
import PlusJakartaDisplayItalicTTF from '@fonts/PlusJakartaDisplay/PlusJakartaDisplay-Italic.ttf';
import PlusJakartaDisplayItalicWOFF from '@fonts/PlusJakartaDisplay/PlusJakartaDisplay-Italic.woff';
import PlusJakartaDisplayItalicWOFF2 from '@fonts/PlusJakartaDisplay/PlusJakartaDisplay-Italic.woff2';

import PlusJakartaTextBoldTTF from '@fonts/PlusJakartaText/PlusJakartaText-Bold.ttf';
import PlusJakartaTextBoldWOFF from '@fonts/PlusJakartaText/PlusJakartaText-Bold.woff';
import PlusJakartaTextBoldWOFF2 from '@fonts/PlusJakartaText/PlusJakartaText-Bold.woff2';
import PlusJakartaTextBoldItalicTTF from '@fonts/PlusJakartaText/PlusJakartaText-BoldItalic.ttf';
import PlusJakartaTextBoldItalicWOFF from '@fonts/PlusJakartaText/PlusJakartaText-BoldItalic.woff';
import PlusJakartaTextBoldItalicWOFF2 from '@fonts/PlusJakartaText/PlusJakartaText-BoldItalic.woff2';
import PlusJakartaTextLightTTF from '@fonts/PlusJakartaText/PlusJakartaText-Light.ttf';
import PlusJakartaTextLightWOFF from '@fonts/PlusJakartaText/PlusJakartaText-Light.woff';
import PlusJakartaTextLightWOFF2 from '@fonts/PlusJakartaText/PlusJakartaText-Light.woff2';
import PlusJakartaTextLightItalicTTF from '@fonts/PlusJakartaText/PlusJakartaText-LightItalic.ttf';
import PlusJakartaTextLightItalicWOFF from '@fonts/PlusJakartaText/PlusJakartaText-LightItalic.woff';
import PlusJakartaTextLightItalicWOFF2 from '@fonts/PlusJakartaText/PlusJakartaText-LightItalic.woff2';
import PlusJakartaTextRegularTTF from '@fonts/PlusJakartaText/PlusJakartaText-Regular.ttf';
import PlusJakartaTextRegularWOFF from '@fonts/PlusJakartaText/PlusJakartaText-Regular.woff';
import PlusJakartaTextRegularWOFF2 from '@fonts/PlusJakartaText/PlusJakartaText-Regular.woff2';
import PlusJakartaTextItalicTTF from '@fonts/PlusJakartaText/PlusJakartaText-Italic.ttf';
import PlusJakartaTextItalicWOFF from '@fonts/PlusJakartaText/PlusJakartaText-Italic.woff';
import PlusJakartaTextItalicWOFF2 from '@fonts/PlusJakartaText/PlusJakartaText-Italic.woff2';

const FontFaces = css`
  @font-face {
    font-family: 'Plus Jakarta Display';
    src: url(${PlusJakartaDisplayLightWOFF2}) format('woff2'),
      url(${PlusJakartaDisplayLightWOFF}) format('woff'),
      url(${PlusJakartaDisplayLightTTF}) format('truetype');
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: 'Plus Jakarta Display';
    src: url(${PlusJakartaDisplayLightItalicWOFF2}) format('woff2'),
      url(${PlusJakartaDisplayLightItalicWOFF}) format('woff'),
      url(${PlusJakartaDisplayLightItalicTTF}) format('truetype');
    font-weight: 300;
    font-style: italic;
  }
  @font-face {
    font-family: 'Plus Jakarta Display';
    src: url(${PlusJakartaDisplayRegularWOFF2}) format('woff2'),
      url(${PlusJakartaDisplayRegularWOFF}) format('woff'),
      url(${PlusJakartaDisplayRegularTTF}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Plus Jakarta Display';
    src: url(${PlusJakartaDisplayItalicWOFF2}) format('woff2'),
      url(${PlusJakartaDisplayItalicWOFF}) format('woff'),
      url(${PlusJakartaDisplayItalicTTF}) format('truetype');
    font-weight: normal;
    font-style: italic;
  }
  @font-face {
    font-family: 'Plus Jakarta Display';
    src: url(${PlusJakartaDisplayMediumWOFF2}) format('woff2'),
      url(${PlusJakartaDisplayMediumWOFF}) format('woff'),
      url(${PlusJakartaDisplayMediumTTF}) format('truetype');
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: 'Plus Jakarta Display';
    src: url(${PlusJakartaDisplayMediumItalicWOFF2}) format('woff2'),
      url(${PlusJakartaDisplayMediumItalicWOFF}) format('woff'),
      url(${PlusJakartaDisplayMediumItalicTTF}) format('truetype');
    font-weight: 500;
    font-style: italic;
  }
  @font-face {
    font-family: 'Plus Jakarta Display';
    src: url(${PlusJakartaDisplayBoldWOFF2}) format('woff2'),
      url(${PlusJakartaDisplayBoldWOFF}) format('woff'),
      url(${PlusJakartaDisplayBoldTTF}) format('truetype');
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: 'Plus Jakarta Display';
    src: url(${PlusJakartaDisplayBoldItalicWOFF2}) format('woff2'),
      url(${PlusJakartaDisplayBoldItalicWOFF}) format('woff'),
      url(${PlusJakartaDisplayBoldItalicTTF}) format('truetype');
    font-weight: 600;
    font-style: italic;
  }
  @font-face {
    font-family: 'Plus Jakarta Text';
    src: url(${PlusJakartaTextLightWOFF2}) format('woff2'),
      url(${PlusJakartaTextLightWOFF}) format('woff'),
      url(${PlusJakartaTextLightTTF}) format('truetype');
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: 'Plus Jakarta Text';
    src: url(${PlusJakartaTextLightItalicWOFF2}) format('woff2'),
      url(${PlusJakartaTextLightItalicWOFF}) format('woff'),
      url(${PlusJakartaTextLightItalicTTF}) format('truetype');
    font-weight: 300;
    font-style: italic;
  }
  @font-face {
    font-family: 'Plus Jakarta Text';
    src: url(${PlusJakartaTextRegularWOFF2}) format('woff2'),
      url(${PlusJakartaTextRegularWOFF}) format('woff'),
      url(${PlusJakartaTextRegularTTF}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Plus Jakarta Text';
    src: url(${PlusJakartaTextItalicWOFF2}) format('woff2'),
      url(${PlusJakartaTextItalicWOFF}) format('woff'),
      url(${PlusJakartaTextItalicTTF}) format('truetype');
    font-weight: normal;
    font-style: italic;
  }
  @font-face {
    font-family: 'Plus Jakarta Text';
    src: url(${PlusJakartaTextBoldWOFF2}) format('woff2'),
      url(${PlusJakartaTextBoldWOFF}) format('woff'),
      url(${PlusJakartaTextBoldTTF}) format('truetype');
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: 'Plus Jakarta Text';
    src: url(${PlusJakartaTextBoldItalicWOFF2}) format('woff2'),
      url(${PlusJakartaTextBoldItalicWOFF}) format('woff'),
      url(${PlusJakartaTextBoldItalicTTF}) format('truetype');
    font-weight: 600;
    font-style: italic;
  }
`;

export default FontFaces;
