import axios from 'axios';

export const fetchProducts = async (url = 'https://dev1api.credello.com/static-products') => {
  try {
    await delay(1000);
    const response = await axios.get(url);

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