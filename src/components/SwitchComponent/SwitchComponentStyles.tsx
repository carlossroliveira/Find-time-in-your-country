import styled from 'styled-components';
import Switch, { ReactSwitchProps } from 'react-switch';

export const ContainerSC = styled.section``;

export const Toggle = styled(Switch).attrs<ReactSwitchProps>(({ theme }) => ({
  onColor: theme.color_background.tertiary,
  offColor: theme.color_background.quaternary,
  onHandleColor: theme.color_background.primary,
  offHandleColor: theme.color_background.tertiary,
}))<ReactSwitchProps>``;

export const ParagraphSC = styled.p`
  margin-bottom: 3rem;
  font-weight: 600;
  font-style: italic;
`;
