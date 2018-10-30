import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://reactjs-burgerworld.firebaseio.com/'
});

export default instance;
