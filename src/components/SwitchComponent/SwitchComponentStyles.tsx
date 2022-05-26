import styled from 'styled-components';
import Switch, { ReactSwitchProps } from 'react-switch';

export const ContainerSC = styled.section`
  gap: 30px;
  display: flex;
  align-items: center;
  @media (max-width: 882px) {
    gap: 10px;
    margin: 25px 0 0 10px;
  }
`;
export const Toggle = styled(Switch).attrs<ReactSwitchProps>(({ theme }) => ({
  onColor: theme.color_background.tertiary,
  offColor: theme.color_background.quaternary,
  onHandleColor: theme.color_background.primary,
  offHandleColor: theme.color_background.tertiary,
}))<ReactSwitchProps>``;

export const TitleSC = styled.h1`
  text-transform: uppercase;
  color: ${({ theme }) => theme.fontDefault.secondary};

  @media (max-width: 879px) {
    text-align: center;
  }
`;
