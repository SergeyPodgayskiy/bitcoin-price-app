import styled from 'styled-components';
import { FunctionComponent } from 'react';

import { themeSpaces } from '../theme';

// Props Interface
interface ContainerProps {
  size?: string;
}

// Styled Component
const Container: FunctionComponent<ContainerProps> = styled.div<ContainerProps>`
  padding: 0 ${(props) => props.size || themeSpaces.md};
`;

export default Container;
