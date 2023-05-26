import { Types } from "./types";
import { fetchProducts } from '../../services/products';

const start_fetch_products = () => ({
  type: Types.START_GET_PRODUCTS_LIST,
  payload: {}
});

const end_fetch_products = (success, error) => ({
  type: Types.END_GET_PRODUCTS_LIST,
  payload: {
    success: success,
    error
  }
});

export const fetch_products = () => async (dispatch) => {
  dispatch(start_fetch_products());
  const [response, error] = await fetchProducts('data/products.json');
  dispatch(end_fetch_products(response, error));
};

