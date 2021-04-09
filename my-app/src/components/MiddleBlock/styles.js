import styled from 'styled-components';

export const MiddleBlock = styled.section`
  position: relative;
  padding: 0rem 0 5rem;
  text-align: center;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 768px) {
    padding: 0.15rem 0 3rem;
  }
`;

export const Content = styled.p`
  padding: 0.25rem 0 0.15rem;
`;

export const ContentWrapper = styled.div`
  max-width: 570px;

  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;
