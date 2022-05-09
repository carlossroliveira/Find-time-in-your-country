import styled from 'styled-components';
import { BsSearch } from 'react-icons/bs';

export const ContainerSC = styled.section`
  position: relative;
  padding: 0 5rem;
`;

export const InputSC = styled.input`
  outline: none;
  border-radius: 5px;
  background: #331a69;
  border: 1px solid #331a69;

  width: 400px;
  height: 60px;

  text-indent: 2rem;
  font-size: 1.5rem;

  color: white;

  ::-webkit-input-placeholder {
    color: white;
  }
  ::-moz-placeholder {
    color: white;
  }
  :-ms-input-placeholder {
    color: white;
  }
`;
export const BsSearchSC = styled(BsSearch)`
  position: absolute;
  background-color: white;

  cursor: pointer;
  right: 80px;
  top: 0px;
  height: 60px;
  font-size: 30px;
  padding: 15px;
  width: 60px;
`;
