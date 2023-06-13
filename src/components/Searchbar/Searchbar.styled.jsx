import styled from 'styled-components';

export const SearchbarWrapper = styled.div`
  padding: 0 25px;
`;

export const SearchForm = styled.form`
  display: flex;
  gap: 20px;
  width: 700px;
  height: 50px;
  max-width: 100%;
  margin: 0 auto;
`;

export const SearchFormButton = styled.button`
  border: 3px solid var(--brown);
  background-color: var(--brown);
  color: var(--cream);
  border-radius: 50px;
  display: flex;
  align-items: center;
  width: 30%;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: var(--cream);
    color: var(--brown);
  }
`;

export const Input = styled.input`
  width: 70%;
  padding: 0 20px;
  border: 3px solid var(--brown);
  border-radius: 50px;
  display: flex;
  align-items: center;
  background-color: var(--cream);

  font-family: 'IBM Plex Mono';
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 2px;

  ::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;
