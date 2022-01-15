import React, { ChangeEvent, useCallback } from 'react';
import { debounce } from 'lodash-es';
import SearchIcon from '@mui/icons-material/Search';
import { InputBase } from '@mui/material';
import {
  InputBaseWrapper,
  SearchCompany,
  SearchIconWrapper,
} from './Search.styles';
import { useAppDispatch } from '../../store/store';
import { setSearch } from '../../store/companies/companiesSlice';

type SearchProps = {
  placeholder: string;
};

const Search = ({ placeholder }: SearchProps) => {
  const dispatch = useAppDispatch();

  const handleSearch = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    dispatch(setSearch(event.target.value));
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleChange = useCallback(
    debounce((e) => handleSearch(e), 250),
    []
  );

  return (
    <SearchCompany>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <InputBaseWrapper>
        <InputBase
          onChange={handleChange}
          placeholder={placeholder}
          inputProps={{ 'aria-label': 'search' }}
        />
      </InputBaseWrapper>
    </SearchCompany>
  );
};

export default Search;
