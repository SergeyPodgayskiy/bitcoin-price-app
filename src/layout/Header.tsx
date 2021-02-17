import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import { Container } from '../styles/components';
import { NavigationBar, NavigationLink } from '../components';

// Props Interface
interface HeaderProps {
  links?: NavigationLink[];
}

// Styles
const StyledHeader = styled.header`
  display: flex;
  flex-flow: row nowrap;

  background-color: ${({ theme }) => theme.color.dark};
`;

// Component
const Header: FunctionComponent<HeaderProps> = ({ links }) => {
  return (
    <StyledHeader>
      <Container>
        <NavigationBar links={links} />
      </Container>
    </StyledHeader>
  );
};

export default Header;
