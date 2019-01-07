export const loadTasks = (state, tasks) => {
  state.tasks = tasks
};

export const clearTasks = (state) => {
  state.tasks = []
  state.orderBy = 'name'
  state.loadedTask = null
};

export const loadTask = (state, task) => {
  state.loadedTask = task
};

export const clearLoadedTasks = state => {
  state.loadedPark = null
};

export const clearMessage = state => {
  state.message = ''
};

export const setLoading = (state, status) => {
  state.loading = status
};

export const setUsers = (state, paylod) => {
  if (!Array.isArray(paylod)) {
    console.log('Only array can be assign to users');

    return;
  }

  state.users = paylod;
};

export const login = state => {
  state.loading = true;
  state.auth_error = null;
}

export const loginSuccess = (state, payload) => {
  state.auth_error = null;
  state.isLoggedin = true;
  state.loading = false;
  state.currentUser = Object.assign({}, payload.user, {token: payload.access_token});

  localStorage.setItem("user", JSON.stringify(state.currentUser));
}

export const loginFailed = (state, payload) => {
  state.loading = false;
  state.auth_error = payload.error;
}

export const logout = state => {
  localStorage.removeItem("user");
  state.isLoggedin = false;
  state.currentUser = null;
}

export const registerSuccess = (state, payload) => {
  state.reg_error = null;
  state.registeredUser = payload.user;
}

export const registerFailed = (state, payload) => {
  state.reg_error = payload.error;
}

