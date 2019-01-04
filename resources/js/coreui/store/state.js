// root state object.
// each Vuex instance is just a single state tree.
export default {
  version: __VERSION,
  appName: 'Engineering test',
  // here we will keep all modules list
  tasks: [
    /* the structure of test
    {
      id          : 1
      name        : 'test Task',
      friendlyName: 'Test Task',
      icon        : 'someicon',
      isEnabled   : true,
      isSelected  : false,
    },
    */
  ]
}
