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
