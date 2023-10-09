/*
Extra Credit:
1. Create a function called searchTermReducer that can handle the following action types:
    * 'searchTerm/setSearchTerm'
    * 'searchTerm/clearSearchTerm'
    * Don't forget to set the initial state and return state by default!
*/

import { inventoryData } from '../../../data.js';
import { setSearchedItmes } from '../inventory/inventorySlice.js';

const initialSearchState = '';

export const updateSearchedItems = (searchTerm) => (dispatch, getState) => {
    if (searchTerm) {
      const items = searchedItems(searchTerm);
      dispatch(setSearchedItmes(items));
    } else {
        dispatch(setSearchedItmes(inventoryData));
    }
  }

export const searchedItems = (term) =>
{
    console.log(term);
    return inventoryData.filter(item => item.name.toLowerCase().includes(term.toLowerCase()))
}


export const searchTermReducer = (searchTerm = initialSearchState, action) =>
{
    switch(action.type){
        case 'searchTerm/setSearchTerm':
            {
     
                return action.payload
            };

        case 'searchTerm/clearSearchTerm':
            {
                return '';
            }
        default:
            {
                return searchTerm
            }
    }
}

/*
2. Create a function called setSearchTerm
    * It has one parameter, term
    * It returns an action object whose payload is the term value
    * See SearchTerm.js for how this will be used.

*/

export const setSearchTerm = (term) =>
{
    if (typeof term === "string" && term.trim().length > 0)
    {
        return {
            type: 'searchTerm/setSearchTerm',
            payload: term
          };
    }
    else
    {
        return {
            type: 'searchTerm/clearSearchTerm',
            payload: ''
          };
    }
}

/*
3. Create a function called clearSearchTerm
    * It returns an action object with no payload
    * See SearchTerm.js for how this will be used.

*/

export const clearSearchTerm = () =>
{
    return {
        type: 'searchTerm/clearSearchTerm',
        payload: ''
      };
}