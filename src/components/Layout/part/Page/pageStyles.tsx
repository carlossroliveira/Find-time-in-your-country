import styled from 'styled-components';

export const ContainerSC = styled.section`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.color_background.tertiary};
`;

export const TitleSC = styled.h1`
  color: ${({ theme }) => theme.fontDefault.primary};
`;
