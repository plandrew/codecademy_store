import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SearchTerm } from '../features/searchTerm/SearchTerm.js';
import { Inventory } from '../features/inventory/Inventory.js';
import { CurrencyFilter } from '../features/currencyFilter/CurrencyFilter.js';
import { Cart } from '../features/cart/Cart.js';

const App = () => {
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <div>
      <SearchTerm 
        searchTerm={state.searchTerm}
      />
      <CurrencyFilter
        currencyFilter={state.currencyFilter}
      />

      <Inventory
        inventory={state.inventory}
        currencyFilter={state.currencyFilter}
      />

      <Cart
        cart={state.cart}
      />
    </div>
  );
};

export default App;
