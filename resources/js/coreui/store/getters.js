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

export const getTasks = state => {
  // var filterBy = state.taskState
  //
  // if (filterBy === "") {
    return state.tasks
  // } else {
  //   let arrFiltered = state.tasks.filter(el => {
  //     return el.state === filterBy
  //   })
  //   return arrFiltered
  // }

};

export const getLoadedTasks = state => {
  return state.tasks
};

// export const getLoadedTaskImage = state => {
//   return state.loadedTaskImage
// };

// export const getLoadedTaskWeather = state => {
//   return state.loadParkWeather
// };

export const getMessage = state => {
  return state.message
};

export const getTaskState = state => {
  return state.taskState
};

export const userListInSidebar = state => {
  var items = [];

  items.push({
    title  : true,
    name   : state.appName,
    class  : '',
    wrapper: {
      element   : '',
      attributes: {},
    },
  });

  for(let i in state.users){

    // get only enabled modules
    // if (!state.modules[i].isEnabled) {
    //   continue;
    // }
    // let num = i;
    // num++;
    let item = {
      name : state.users[i].name,
      url  : '/tasks/',
      // icon : state.modules[i].icon,
    };

    items.push(item);
  }

  return items;
}
