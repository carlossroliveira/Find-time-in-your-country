import styled from 'styled-components';

export const ContainerSC = styled.section`
  grid-area: footerSC;
  background-color: violet;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
`;

export const DivFirstSC = styled.div`
  border: 1px solid tomato;
`;

export const ParagraphSC = styled.p`
  font-weight: 600;
  color: ${({ theme }) => theme.fontDefault.primary};
`;

export const DivSecondSC = styled.div`
  border: 1px solid red;
`;
