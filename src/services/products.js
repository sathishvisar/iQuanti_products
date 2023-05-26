import axios from 'axios';

export const fetchProducts = async () => {
  try {
    await delay(1000);
    const response = await axios.get('https://dev1api.credello.com/static-products');

    return [response?.data, null];
    
  } catch ({ response }) {
    return [null, response && response.data];
  }
};


const delay = async (milliseconds) => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, milliseconds);
  });

  console.log(`This is executed after ${milliseconds} milliseconds.`);
};