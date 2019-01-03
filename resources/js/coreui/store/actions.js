// actions are functions that cause side effects and can involve
// asynchronous operations.
import ModulesApi from '@/api/Modules';

export default {
  getModules(context) {
    ModulesApi
      .getModules()
      .then(response => {
        context.commit('setModules', response.data);
      })
      .catch(error => {
        console.log(error)
        // @TODO handle the error -> notification system
      });
  },

  updateModule(context, paylod) {
    ModulesApi
      .updateModule(paylod)
      .then(response => {
        context.commit('updateModule', paylod);
      })
      .catch(error => {
        console.log(error)
        // @TODO handle the error -> notification system
      });
  }
}
