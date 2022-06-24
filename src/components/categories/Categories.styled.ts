import styled from "styled-components";

export const CategoriesPage = styled.div`
  margin-top: 2rem !important;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 1.3em;
  text-align: center;
  @media (max-width: 1131px) {
    grid-gap: 2em;
  }
  @media (max-width: 1094px) {
    grid-gap: 1.9em;
  }
  @media (max-width: 800px) {
    grid-template-columns: repeat(5, 1fr);
  }
  @media (max-width: 570px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 388px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 320px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const CategoryDiv = styled.div`
  flex-grow: 1;
`;

export const CategoryP = styled.p`
  font-size: 1.5rem;
  margin-top: 1rem;
  color: #333;
`;

export const FormWrapper = styled.div`
  text-align: center;
  margin-top: 1rem;
`;

export const SmallHeader = styled.h1`
  color: #333;
  font-size: 1.8rem;
  text-shadow: 2px 2px 2px #eee;
`;

export const Horizont = styled.hr`
  display: none;
`;