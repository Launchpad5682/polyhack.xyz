import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Flavour = styled.div`
  font-weight: 400;
  font-size: 0.9rem;
  text-align: left;
  border-left: 5px solid red;
  color: #404040;
`;
export const Subtitle = styled.div`
  margin: auto; 
  margin-top: 4rem; 
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid #404040;
  display: flex;
  width: 50vw;
  font-weight: 700;
  font-size x-large;
  gap: 1.5rem;
  align-items: center;

  & > * {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

export const HashBorder = styled.div`
  color: red;
  margin-right: -2rem;
`;
