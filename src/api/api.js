import axios from 'axios';

export const fetchElements = (limit, offset) => {
  return axios.get(`/api/elements/?limit=${limit}&offset=${offset}`)
    .then(response => response.data);
};
