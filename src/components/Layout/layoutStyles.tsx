import styled from 'styled-components';

export const ContainerSC = styled.section`
  max-width: 1440px;
  margin: 0 auto;
  height: 100vh;
  padding: 2rem;
  box-sizing: border-box;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-template-rows: 100px 1fr 200px;
  grid-template-areas:
    'headerSC headerSC'
    'sidebarSC contentSC'
    'sidebarSC contentSC'
    'footerSC footerSC';

  @media (max-width: 768px) {
    font-size: 87.5%;
    grid-template-areas:
      'headerSC'
      'sidebarSC'
      'contentSC'
      'footerSC';
  }
`;
