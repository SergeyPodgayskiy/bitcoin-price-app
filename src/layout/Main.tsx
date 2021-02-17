import React, { FunctionComponent } from 'react';
import { Container, SpaceBox } from '../styles/components';
import { themeSpaces } from '../styles/theme';

const Main: FunctionComponent = ({ children }) => {
  return (
    <main>
      <Container>
        <SpaceBox p={themeSpaces.md}>{children}</SpaceBox>
      </Container>
    </main>
  );
};

export default Main;
