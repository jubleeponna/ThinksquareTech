import styled from 'styled-components';
//background: ${(props) => props.color || '#FF8C00'};
//color: ${(props) => (props.color ? '#2E186A' : '#fff')};
////background-color: #6600CC;
//background-color: '#76C568';
export const Button = styled.button`
background: ${(props) => props.color || '#76C568'};
    -webkit-border-radius: 60px;
    border-radius: 60px;
    border: none;
    color: #eeeeee;
    cursor: pointer;
    display: inline-block;
    font-family: sans-serif;
    font-size: 20px;
    padding: 10px 10px;
    text-align: center;
    text-decoration: none;
    animation: gradient 2.5s infinite 0.8s cubic-bezier(0.2, 0.8, 0.2, 1.2) forwards;
    
  @keyframes glowing {
    0% {
      background-color: #2ba805;
      box-shadow: 0 0 5px #2ba805;
    }
    50% {
      background-color: #49e819;
      box-shadow: 0 0 20px #49e819;
    }
    100% {
      background-color: #2ba805;
      box-shadow: 0 0 5px #2ba805;
    }
  }
  .button {
    animation: glowing 1300ms infinite;
  }
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