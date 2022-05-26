import {
  AiOutlineLinkedin,
  AiFillGithub,
  AiOutlineGlobal,
} from 'react-icons/ai';
import styled, { css, keyframes } from 'styled-components';

const EFFECT_IMG = keyframes`
from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const SVG = css`
  font-size: 40px;
  transition: filter 0.2s;
  color: ${({ theme }) => theme.fontDefault.primary};

  &:hover {
    cursor: pointer;
    filter: brightness(0.8);
  }
`;

export const ContainerSC = styled.section`
  grid-area: footerSC;

  display: grid;
  grid-gap: 0.5rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

  align-items: center;
  text-align: center;

  @media (max-width: 768px) {
    margin-top: 14rem;
    padding-bottom: 2rem;
  }

  @media (max-width: 715px) and (min-width: 472px) {
    gap: 2rem;
    display: flex;
    margin: 14rem auto 0;
    padding-bottom: 2rem;
  }
`;

export const DivFirstSC = styled.div``;

export const ImgSC = styled.img`
  width: 5rem;
  animation: ${EFFECT_IMG} infinite 20s linear;
`;

export const ParagraphSC = styled.p`
  font-weight: 600;
  font-size: 18px;
  color: ${({ theme }) => theme.fontDefault.primary};
`;

export const DivSecondSC = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const Ahref = styled.a``;

export const LinkedinSC = styled(AiOutlineLinkedin)`
  ${SVG}
`;

export const FillGithubSC = styled(AiFillGithub)`
  ${SVG}
`;

export const CodeSandboxSC = styled(AiOutlineGlobal)`
  ${SVG}
`;
