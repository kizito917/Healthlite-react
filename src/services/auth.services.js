import axios from './axios';

const Authservice = {
    processLogin: (formData) => {
        return axios.post('/login', formData)
    }
}

export default Authservice;