import axios from 'axios';



const API_URL = 'http://127.0.0.1:8000/';

class AuthService {
  login(user) {
    return axios
      .post(API_URL + 'o/token/', {
        client_id: 'KziZ3obenm05pj16kfvERM0iaXQazBUY9OFsByYc',
        client_secret: 'ywVoT2piM7QK9Mk7MmVJn6qNHYLwhVduY38BIO5eUw8bYii7d4wMeAnEGyV2dMF1VvXiI4R2WpVvTZGTv5RqzfcApR3oIPiIiHfj1nAXD6jwTYQkpSHOL65pf0w3cIkc',
        grant_type: 'password',
        username: user.username,
        password: user.password
      })
      .then(response => {
        if (response.data.access_token) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem('user');
  }

  register(user) {
    return axios.post(API_URL + 'users/', {
      username: user.username,
      email: user.email,
      password: user.password, 
      documents: [],
    });
  }
}

export default new AuthService();
// {headers: {"Access-Control-Allow-Origin": "*",
//     "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
//     "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"}