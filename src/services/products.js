import axios from 'axios'

export const fetchProducts = async (url = 'https://dev1api.credello.com/static-products') => {
  try {
    const response = await axios.get(url)

    return [response?.data, null]
  } catch ({ response }) {
    return [null, response && response.data]
  }
}
