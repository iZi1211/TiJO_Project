let user = {};

export default {

  setUser(newUser) {
    user = newUser;
  },
  getUser() {
    return user;
  }
};