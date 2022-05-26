import styled from 'styled-components';
import { COMPONENT_SIZE_STYLE } from '../Aside/asideStyles';

export const ContainerSC = styled.section<{ img: string }>`
  grid-area: contentSC;

  ${COMPONENT_SIZE_STYLE}

  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url(${({ img }) => img});
`;
