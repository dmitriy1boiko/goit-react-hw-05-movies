import { toast, ToastContainer } from 'react-toastify';
import PropTypes from 'prop-types';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import {
  SearchbarWrapper,
  SearchFormButton,
  SearchForm,
  Input,
} from './Searchbar.styled';

const Searchbar = ({ setSearch }) => {
  const [input, setInput] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if (input.trim() === '') {
      return toast.error('Enter search value!');
    }
    setSearch({ movies: input.trim() });
    
    setInput('');
  };
  
  return (
    <SearchbarWrapper>
      <SearchForm onSubmit={handleSubmit}>
        <Input
          type="text"
          name="searchQuery"
          autoComplete="off"
          autoFocus={false}
          placeholder="Search movie"
          value={input}
          onChange={e => setInput(e.target.value)}
        ></Input>
        <SearchFormButton type="submit">Search</SearchFormButton>
      </SearchForm>
      <ToastContainer position="top-right" autoClose={3000} theme="colored" />
    </SearchbarWrapper>
  );
};
export default Searchbar;

Searchbar.propTypes = {
  setSearch: PropTypes.func.isRequired,
};
