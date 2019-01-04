// getters are functions like computed
export default {
  moduleListInSidebar: state => {
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

    for(let i in state.tasks) {

      // get only enabled modules
      if (!state.tasks[i].isEnabled) {
        continue;
      }
      let item = {
        name : state.tasks[i].friendlyName,
        url  : ''
      };

      items.push(item);
    }

    return items;
  }
}
