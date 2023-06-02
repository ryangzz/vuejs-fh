import * as getters from './getters.js';
import * as actions from './actions.js';
import * as mutations from './mutations.js';
import state from './state.js';

const journalModule = {
  namespaced:true,
  actions,
  getters,
  mutations,
  state
}

export default journalModule;