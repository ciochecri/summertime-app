import styled from "styled-components";

export const MiddleBlockSection = styled("section")`
  position: relative;
  padding: 2rem 0 2rem;
  text-align: center;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    padding: 1rem 0 1rem;
  }
`;

export const Content = styled("p")`
  padding: 0.75rem 0 0.75rem;
`;

export const ContentWrapper = styled("div")`
  max-width: 670px;

  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;
