import styled, { css } from 'styled-components';

const STYLE_DEFAULT = css`
  margin: 0 auto;
  font-size: calc(1rem + 1vw);
  color: ${({ theme }) => theme.fontDefault.secondary};
`;
export const COMPONENT_SIZE_STYLE = css`
  padding: 40px 50px;
  height: 20rem;
  margin-top: 2rem;
`;

export const ContainerSC = styled.section`
  grid-area: sidebarSC;

  ${COMPONENT_SIZE_STYLE}

  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;

  display: grid;
  align-items: flex-start;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(3, 1fr);

  @media (max-width: 1048px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 0 0 0;
    span {
      text-align: center;
      margin: 0 0 10px 0;
      padding: 5px 0 5px 0;
    }
    p {
      margin: 5px 0;
    }
  }
`;
export const CountrySC = styled.p`
  ${STYLE_DEFAULT}
`;
export const StateSC = styled.p`
  ${STYLE_DEFAULT}
`;
export const DateSC = styled.p`
  ${STYLE_DEFAULT}
`;
export const TimeSC = styled.p`
  ${STYLE_DEFAULT}
`;

export const SpanSC = styled.span`
  position: relative;
  width: 13rem;
  margin-left: 2rem;
  border-radius: 5px;
  padding: 5px 0 5px 2rem;
  color: ${({ theme }) => theme.fontDefault.primary};
  background-color: ${({ theme }) => theme.color_background.quaternary};

  &:hover {
    filter: brightness(0.8);
  }

  &::before {
    content: '';
    position: absolute;
    left: 0px;
    top: 0;
    width: 6px;
    height: 100%;
    border-radius: 40px 0px 15px 35px;
    background-color: ${(props) => props.theme.color_background.tertiary};
  }
`;
