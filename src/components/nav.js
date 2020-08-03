import React, { Component } from 'react';
import { Link } from 'gatsby';
import { throttle } from '@utils';
import { navLinks } from '@utils/config';
import Menu from './menu';

// styles
import styled from 'styled-components';
import { media } from '@styles';

const StyledNav = styled.nav`
  padding: 1.82292vw calc(13500vw / var(--size));
  position: fixed;
  left: 0;
  right: 0;
  font-size: 1.09375vw;
  background: 0 0;
  z-index: 999;
  user-select: none;
  background-color: var(--color-background);
  transition: background 0.4s ease;

  ${media.bigDesktop`
  font-size: calc(2100vw/var(--size));
  padding: 2.4vw calc(13500vw/var(--size));
  `};
  ${media.tablet`
  padding: 3.65vw 9vw;
  font-size: 17px!important;
  `};
  ${media.thone`padding: 28px 5.4vw;`};
  ${media.phone`padding: 21px 5.4vw;`};
`;
const StyledHamburger = styled.div`
  overflow: visible;
  cursor: pointer;
  transition-timing-function: linear;
  transition-duration: 0.15s;
  transition-property: opacity, filter;
  text-transform: none;
  color: inherit;
  border: 0;
  background-color: transparent;
  display: none;
  z-index: 1000;
  ${media.thone`display: flex;`};
`;
const StyledHamburgerBox = styled.div`
  position: relative;
  display: inline-block;
  width: 20px;
  height: 24px;
`;
const StyledHamburgerInner = styled.div`
  background-color: var(--color-text);
  position: absolute;
  width: 20px;
  height: 3px;
  border-radius: 3px;
  top: 50%;
  left: 0;
  right: 0;
  transition-duration: 0.22s;
  transition-property: transform;
  transition-delay: ${(props) => (props.menuOpen ? `0.12s` : `0s`)};
  transform: rotate(${(props) => (props.menuOpen ? `225deg` : `0deg`)});
  transition-timing-function: cubic-bezier(
    ${(props) =>
      props.menuOpen ? `0.215, 0.61, 0.355, 1` : `0.55, 0.055, 0.675, 0.19`}
  );
  &:before,
  &:after {
    content: '';
    display: block;
    background-color: var(--color-text);
    position: absolute;
    left: auto;
    right: 0;
    width: 20px;
    height: 3px;
    transition-timing-function: ease;
    transition-duration: 0.15s;
    transition-property: transform;
    border-radius: 4px;
  }
  &:before {
    width: ${(props) => (props.menuOpen ? `100%` : `120%`)};
    top: ${(props) => (props.menuOpen ? `0` : `-10px`)};
    opacity: ${(props) => (props.menuOpen ? 0 : 1)};
    transition: ${(props) =>
      props.menuOpen
        ? 'top 0.1s ease-out, opacity 0.1s ease-out 0.12s'
        : 'top 0.1s ease-in 0.25s, opacity 0.1s ease-in'};
  }
  &:after {
    width: ${(props) => (props.menuOpen ? `100%` : `80%`)};
    bottom: ${(props) => (props.menuOpen ? `0` : `-10px`)};
    transform: rotate(${(props) => (props.menuOpen ? `-90deg` : `0`)});
    transition: ${(props) =>
      props.menuOpen
        ? 'bottom 0.1s ease-out, transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s'
        : 'bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19)'};
  }
`;
const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const NavLogo = styled.div`
  font-family: var(--font-family);
  color: var(--color-text);
  z-index: 99;

  p {
    font-size: inherit;
    margin: 0;
    font-size: 100%;
  }
`;
const NavLinks = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  z-index: 999;
  text-decoration: none;
  margin: 0;
  ${media.thone`display: none;`};
`;
const NavLinkWrapper = styled.li`
  overflow: hidden;
  padding: 0 4px;
  height: auto;
  margin-left: 2.1875vw;
`;
const NavLink = styled(Link)`
  padding-right: 0;
  font-size: inherit;
  pointer-events: auto;
  cursor: pointer;
  text-align: right;
  width: auto;
  min-width: max-content;
  text-decoration: none;
  color: var(--color-text);

  ${media.tablet`font-size: 18px!important;`};
`;

class Nav extends Component {
  state = { menuOpen: false };

  componentDidMount() {
    setTimeout(() => {
      window.addEventListener('resize', () => throttle(this.handleResize()));
      window.addEventListener('keydown', (e) => this.handleKeydown(e));
    }, 100);
  }

  toggleMenu = () => this.setState({ menuOpen: !this.state.menuOpen });

  handleResize = () => {
    if (window.innerWidth > 600 && this.state.menuOpen) {
      this.toggleMenu();
    }
  };

  handleKeydown = (e) => {
    if (!this.state.menuOpen) {
      return;
    }

    if (e.which === 27 || e.key === 'Escape') {
      this.toggleMenu();
    }
  };

  render() {
    const { menuOpen } = this.state;

    return (
      <StyledNav>
        <NavWrapper>
          <NavLogo>
            <p>Kyrylo Orlov</p>
          </NavLogo>
          <StyledHamburger onClick={this.toggleMenu}>
            <StyledHamburgerBox>
              <StyledHamburgerInner menuOpen={menuOpen} />
            </StyledHamburgerBox>
          </StyledHamburger>
          <NavLinks>
            {navLinks.map(({ url, name }, i) => (
              <NavLinkWrapper key={i}>
                <NavLink to={url}>{name}</NavLink>
              </NavLinkWrapper>
            ))}
          </NavLinks>
          <Menu menuOpen={menuOpen} toggleMenu={this.toggleMenu} />
        </NavWrapper>
      </StyledNav>
    );
  }
}

export default Nav;
