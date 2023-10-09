import React, { useEffect } from 'react';
import { setSearchTerm, clearSearchTerm } from './searchTermSlice.js';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchedItmes } from '../inventory/inventorySlice.js';
import { searchedItems } from './searchTermSlice.js';
import { updateSearchedItems } from './searchTermSlice.js';

const searchIconUrl =
  'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/search.svg';
const clearIconUrl =
  'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/clear.svg';

export const SearchTerm = (props) => {
  const { searchTerm } = props;
  const term = searchTerm;
  const dispatch = useDispatch();
  const onSearchTermChangeHandler = (e) => {
    const userInput = e.target.value;
    dispatch(setSearchTerm(userInput));
  };

  useEffect(() => {
    dispatch(updateSearchedItems(searchTerm));
  }, [searchTerm, dispatch]);

  const onClearSearchTermHandler = () => {
    dispatch(clearSearchTerm());
  };

  return (
    <div id="search-container">
      <img id="search-icon" alt="" src={searchIconUrl} />
      <input
        id="search"
        type="text"
        value={searchTerm.searchTerm}
        onChange={onSearchTermChangeHandler}
        placeholder="Search products"
      />
      {searchTerm && (
        <button
          onClick={onClearSearchTermHandler}
          type="button"
          id="search-clear-button"
        >
          <img src={clearIconUrl} alt="" />
        </button>
      )}
    </div>
  );
};
