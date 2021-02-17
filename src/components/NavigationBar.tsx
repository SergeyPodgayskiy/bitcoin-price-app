import React, { FunctionComponent } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

// NavigationLink Interface
export interface NavigationLink {
  title: string;
  path: string;
}

// Props Interface
interface NavigationBarProps {
  links?: NavigationLink[];
}

// Styles
const StyledNavigationBar = styled.nav`
  display: flex;
  flex-flow: row nowrap;
`;

const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.color.white};
  padding: ${({ theme }) => theme.space.md};

  // '.active' class applies automatically by <NavLink> component
  &.active {
    color: ${({ theme }) => theme.fontColor.tertiary};
  }
`;

// Component
const NavigationBar: FunctionComponent<NavigationBarProps> = ({ links }) => {
  return (
    <StyledNavigationBar>
      {links?.map(({ path, title }) => {
        return (
          <StyledNavLink key={path} to={path}>
            {title}
          </StyledNavLink>
        );
      })}
    </StyledNavigationBar>
  );
};

export default NavigationBar;
