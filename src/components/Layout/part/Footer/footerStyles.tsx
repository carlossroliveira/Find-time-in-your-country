import {
  AiOutlineLinkedin,
  AiFillGithub,
  AiFillCodeSandboxCircle,
} from 'react-icons/ai';
import styled, { css, keyframes } from 'styled-components';

const effectImg = keyframes`
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

  @media (max-width: 715px) and (min-width: 503px) {
    gap: 2rem;
    display: flex;
    margin: 0 auto;
  }
`;

export const DivFirstSC = styled.div``;

export const ImgSC = styled.img`
  width: 5rem;
  animation: ${effectImg} infinite 20s linear;
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

export const CodeSandboxSC = styled(AiFillCodeSandboxCircle)`
  ${SVG}
`;
