import styled from 'styled-components';
import { BsSearch } from 'react-icons/bs';

export const ContainerSC = styled.section`
  position: relative;
`;
export const InputSC = styled.input`
  outline: none;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.color_background.secondary};
  border: 1px solid ${({ theme }) => theme.color_background.secondary};

  width: 400px;
  height: 60px;

  text-indent: 2rem;
  font-size: 1.5rem;

  color: ${({ theme }) => theme.color_background.primary};

  ::-webkit-input-placeholder {
    color: ${({ theme }) => theme.color_background.primary};
  }
  ::-moz-placeholder {
    color: ${({ theme }) => theme.color_background.primary};
  }
  :-ms-input-placeholder {
    color: ${({ theme }) => theme.color_background.primary};
  }

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }
`;
export const BsSearchSC = styled(BsSearch)`
  position: absolute;
  color: ${({ theme }) => theme.color_background.primary};
  background-color: ${({ theme }) => theme.color_background.tertiary};
  border: 1px solid ${({ theme }) => theme.color_background.secondary};
  border-radius: 4px;

  cursor: pointer;
  right: 0;
  top: 0px;
  height: 60px;
  font-size: 30px;
  padding: 15px;
  width: 60px;
`;
