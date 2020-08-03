import styled from 'styled-components';
import media from './media';

const Section = styled.section`
  margin: 0 auto;
  padding: 0 9.375vw 0 33.75vw;
  padding-left: calc(13500vw / 1440);
  padding-right: calc(13500vw / 1440);

  ${media.thone`padding: 0 5.4vw;`};
  ${media.tablet`padding: 0 9vw;`};
`;

export default Section;
