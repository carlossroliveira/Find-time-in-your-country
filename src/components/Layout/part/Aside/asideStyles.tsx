import styled, { css } from 'styled-components';

const STYLE_DEFAULT = css`
  margin: 0 auto;
  font-size: 2rem;
  color: ${({ theme }) => theme.fontDefault.secondary};
`;

export const ContainerSC = styled.section`
  grid-area: sidebarSC;

  height: 15rem;
  margin-top: 35px;

  display: grid;
  align-items: flex-start;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(3, 1fr);
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
