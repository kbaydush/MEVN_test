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

    for(let i in state.modules) {

      // get only enabled modules
      if (!state.modules[i].isEnabled) {
        continue;
      }
      let num = i;
      num++;
      let item = {
        name : state.modules[i].friendlyName,
        url  : '',
        // icon : state.modules[i].icon,
      };

      items.push(item);
    }

    return items;
  }
}
