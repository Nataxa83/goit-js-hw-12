import axios from 'axios';

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const imgApi = axios.create({
  baseURL: 'https://pixabay.com',
  });


export async function searchImages(imgKeyWord, page, per_page) {
 
  try {
    const res = await imgApi.get('/api/', {
        params: {
          key: '44578932-6e2bdfbc9295001d2a495ef0a',
          q: imgKeyWord,
          image_type: 'photo',
          orientation: 'horizontal',
          safesearch: true,
          per_page: per_page,
          page: page,
        }
    });
    
    return res.data;
    
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: `${error}`,
      layout: 2,
      displayMode: 'once',
      backgroundColor: '#ef4040',
      progressBarColor: '#B51B1B',
      position: 'topRight',
    });
  };
}