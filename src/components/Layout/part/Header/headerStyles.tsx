import styled from 'styled-components';

export const ContainerSC = styled.section`
  grid-area: headerSC;
  padding: 0 5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    padding: 0;
    display: flex;
    flex-direction: column;
  }
`;
