import { Types } from './types'
import { fetchProducts } from '../../services/products'

const startFetchProducts = () => ({
  type: Types.START_GET_PRODUCTS_LIST,
  payload: {}
})

const endFetchProducts = (success, error) => ({
  type: Types.END_GET_PRODUCTS_LIST,
  payload: {
    success,
    error
  }
})

export const FetchProducts = () => async (dispatch) => {
  dispatch(startFetchProducts())
  const [response, error] = await fetchProducts('data/products.json')
  dispatch(endFetchProducts(response, error))
}
