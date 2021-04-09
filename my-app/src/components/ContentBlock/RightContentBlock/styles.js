import styled from 'styled-components';

export const RightBlockContainer = styled.section`
  position: relative;
  padding: 0.15rem 0 0.15rem; 
  margin:1.5rem 0rem 2rem 3rem;
  

  @media only screen and (max-width: 760px) {
    padding: 2rem 0 6rem;
  }
`;

export const Content = styled.p`
  margin: 1.5rem 0 2rem 0;
  fontFamily:cursive;
  fontSize:8;
  color:grey
`;

export const ContentWrapper = styled.div`
  position: relative;
   max-width: 840px;

  @media only screen and (max-width: 480px) {
    margin: 1rem 0;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 400px;
`;
