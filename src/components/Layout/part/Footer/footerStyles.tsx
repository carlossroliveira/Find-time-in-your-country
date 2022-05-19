// -------------------------------------------------
// Packages
// -------------------------------------------------
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
`;
export const ContainerSC = styled.section`
  grid-area: footerSC;

  display: grid;
  grid-gap: 0.5rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

  align-items: center;
  text-align: center;
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
export const LinkedinSC = styled(AiOutlineLinkedin)`
  color: ${({ theme }) => theme.fontDefault.primary};

  ${SVG}
`;
export const FillGithubSC = styled(AiFillGithub)`
  color: ${({ theme }) => theme.fontDefault.primary};

  ${SVG}
`;
export const CodeSandboxSC = styled(AiFillCodeSandboxCircle)`
  color: ${({ theme }) => theme.fontDefault.primary};

  ${SVG}
`;
