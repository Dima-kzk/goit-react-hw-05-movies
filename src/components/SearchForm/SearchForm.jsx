import { useState } from 'react';
import { StylishForm } from './SearchForm.styled';

const SearchForm = ({ submit, changeParam, value }) => {
  // const [queryValue, setQueryValue] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    submit(value);
  }

  function handleInputChange(e) {
    // setQueryValue(e.target.value);
    changeParam({ query: e.target.value });
  }

  return (
    <StylishForm onSubmit={handleSubmit}>
      <input
        type="text"
        name="query"
        value={value}
        onChange={handleInputChange}
      />
      <button type="submit">Search</button>
    </StylishForm>
  );
};

export default SearchForm;
