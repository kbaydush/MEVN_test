export const isLoading = state => {
  return state.loading;
};

export const isLoggedin = state => {
  return state.isLoggedin;
};
export const currentUser = state => {
  return state.currentUser;
};
export const authError = state => {
  return state.auth_error;
};
export const regError = state => {
  return state.reg_error;
};
export const registeredUser = state => {
  return state.registeredUser;
};
