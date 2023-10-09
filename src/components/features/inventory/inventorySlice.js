import { inventoryData } from '../../../data.js';

export const loadData = (data) => {
  return {
    type: 'inventory/loadData',
    payload: inventoryData,
  };
};

export const setSearchedItmes = items =>
{
  return {
    type: 'inventory/setSearchedItems',
    payload: items
  }
}
  

const initialInventory = [];
export const inventoryReducer = (inventory = initialInventory, action) => {
  switch (action.type) {
    case 'inventory/loadData': {
      return action.payload;
    }
    case 'inventory/setSearchedItems':
      {
        return action.payload;
      }
    default: {
      return inventory;
    }
  }
};
