import styled from 'styled-components';

export const ContainerSC = styled.section`
  max-width: 1440px;
  margin: 0 auto;
  height: 100vh;
  padding: 3rem;

  box-sizing: border-box;
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-template-rows: repeat(auto-fit, minmax(100px, 1fr));
  grid-template-areas:
    'headerSC headerSC'
    'sidebarSC contentSC'
    'sidebarSC contentSC'
    'footerSC footerSC';

  /*   @media (max-width: 1025px) {
    font-size: 87.5%;
    height: 100%;
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas:
      'header header header'
      'sidebar sidebar sidebar'
      'contentMap contentMap contentMap'
      'contentBus contentBus contentBus'
      'contentInf contentInf contentInf'
      'footer footer footer';
  } */
`;
