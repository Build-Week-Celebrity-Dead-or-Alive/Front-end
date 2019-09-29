import axios from 'axios';



export const axiosWithAuth = () => {
  const token = localStorage.getItem('token');

  return axios.create({
    baseURL: 'https://celebs-dead-or-alive.herokuapp.com/users/:id',
    headers: {
      Authorization: token
    }
  });
};