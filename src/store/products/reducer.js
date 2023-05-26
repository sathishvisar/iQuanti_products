import { Types } from './types';

const initialState = {
  productsData: [],
  productsError: null,
  productsLoading: false,
};

const productsReducer = (state = initialState, action) => {

  switch (action.type) {
    
    case Types.START_GET_PRODUCTS_LIST:
      return {
        productsLoading: true
      };

    case Types.END_GET_PRODUCTS_LIST:
      const { success, error } = action.payload;
      if(error){
        return {
          productsError: error,
          productsLoading: false
        };
      }
      return {
        productsData: success,
        productsLoading: false
      };

    default:
      return state;
  }

};

export default productsReducer;