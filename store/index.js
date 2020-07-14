import Vuex from "vuex";

const checkEvil = () => {
  return new Vuex.Store({
    state: {
      isEvil: false
    },
    mutations: {
      REVERSE(state) {
        state.isEvil = !state.isEvil;
      }
    },
    actions: {
      updateEvil({ state, commit }) {
        commit("REVERSE");
      }
    },
    getter: {
      testEvil(state) {
        return state.isEvil;
      }
    }
  });
};

export default checkEvil;
