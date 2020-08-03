import styled from 'styled-components';
import { motion } from 'framer-motion';

const Cursor = styled(motion.div)`
  position: fixed;
  width: 2.5rem;
  height: 2.5rem;
  background: var(--color-primary);
  border-radius: 100%;
  transition: all 0.3s ease-out;
  transition-property: width, height, border;
  will-change: width, height, transform, border;
  pointer-events: none;
  z-index: 10000;

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
const InnerCursor = styled(motion.div)`
  position: fixed;
  width: 1rem;
  height: 1rem;
  background: var(--color-text);
  border-radius: 100%;
  transition: all 0.3s ease-out;
  transition-property: width, height, border;
  will-change: width, height, transform, border;
  pointer-events: none;
  z-index: 10001;
`;

export { Cursor, InnerCursor };
