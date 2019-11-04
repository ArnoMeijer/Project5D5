import axios from 'axios';

const instance = axios.create ({
    baseURL: 'https://myplaylist-36bf4.firebaseio.com/'

});

export default instance;