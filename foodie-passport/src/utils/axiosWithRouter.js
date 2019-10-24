import axios from 'axios';

export const axiosWithAuth = () => {
  const token = localStorage.getItem('token');

  return axios.create({
    baseURL: 'https://foodie-passport.herokuapp.com/rpp', 
    headers: {
      Authorization: token 
    }
  });
};