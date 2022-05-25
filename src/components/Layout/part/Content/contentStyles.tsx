import styled from 'styled-components';

export const ContainerSC = styled.section<{ img: string }>`
  grid-area: contentSC;

  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url(${({ img }) => img});
`;
