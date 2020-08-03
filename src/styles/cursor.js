import styled from 'styled-components';

export const Cursor = styled.div`
  position: fixed;
  top: 400px;
  left: 400px;
  width: 32px;
  height: 32px;
  background: var(--color-primary);
  border-radius: 100%;
  transform: translate(-50%, -50%);
  transition: all 0.3s ease-out;
  transition-property: width, height, border;
  will-change: width, height, transform, border;
  pointer-events: none;
  z-index: 9999;

  &.pointer {
    border: 4px solid var(--color-text) !important;
  }
  &.hovered {
    background: transparent !important;
    width: 56px;
    height: 56px;
    border: 4px solid var(--color-primary);
    border: 4px solid var(--color-primary);
    cursor: none;
  }
  &.locked {
    background: transparent !important;
    width: 56px;
    height: 56px;
    border: 4px solid var(--color-text) !important;
    top: ${(props) => props.theme.top} !important;
    left: ${(props) => props.theme.left} !important;
  }
  &.nav-open {
    background: var(--color-text);
  }
  &.nav-open,
  &.locked {
    border: 4px solid var(--color-text) !important;
  }
`;

export default Cursor;
