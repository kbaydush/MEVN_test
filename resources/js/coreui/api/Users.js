import axios from 'axios'

export default {

  getUsers() {
    return axios
      .get('/api/users');
  },
  getUser(id) {
    return axios
      .get('/api/users/' + id);
  },
  updateUser(user) {
    return axios
      .put('/api/users/' + user.id, {
        data: user
      });
  }
}
