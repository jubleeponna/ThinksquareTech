import styled from 'styled-components';
//background: ${(props) => props.color || '#FF8C00'};
//color: ${(props) => (props.color ? '#2E186A' : '#fff')};
export const Button = styled.button`
  
  
  font-size: 1rem;
  font-weight: 200;
  width: 50%;
  border: ${(props) => (props.color ? '1px solid #2E186A' : '0px')};
  background: ${(props) => props.color ||  '#76C568'};
  //background: ${(props) => props.color || '#6600CC'};
  border-radius: 8px;
  height: 40px;
  outline: none;
  cursor: pointer;
  margin-top: 0.620rem;
  max-width: 200px;

  @media only screen and (max-width: 1024px) {
    width: ${(props) => (props.width ? '160px' : '100%')};
  }

  @media only screen and (max-width: 768px) {
    width: ${(props) => (props.width ? '140px' : '100%')};
  }

  @media only screen and (max-width: 480px) {
    width: ${(props) => (props.width ? '130px' : '100%')};
  }
`;
