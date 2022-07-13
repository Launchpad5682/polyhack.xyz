import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  gap: 8rem;
  padding-top: 1rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid black;
`;

export const PolyhackTitle = styled.div`
  text-align: center;
  font-weight: 700;
  font-size: x-large;
`;

export const Nav = styled.div`
  display: flex;
  gap: 3rem;

  & > * {
    text-decoration: none;
    color: black;

    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active {
      text-decoration: none;
      color: black;
    }

    &:hover {
      text-decoration: underline;
      text-decoration-color: red;
    }
  }
`;
