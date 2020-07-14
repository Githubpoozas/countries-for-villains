import Vuex from "vuex";

const checkEvil = () => {
  return new Vuex.Store({
    state: {
      isEvil: undefined
    },
    mutations: {
      SWITCH_MUTATION(state) {
        state.isEvil = !state.isEvil;
      },
      GOOD_MUTATION(state) {
        state.isEvil = false;
      },
      EVIL_MUTATION(state) {
        state.isEvil = true;
      }
    },
    actions: {
      switchAction({ state, commit }) {
        commit("SWITCH_MUTATION");
      },
      goodAction({ state, commit }) {
        commit("GOOD_MUTATION");
      },
      evilAction({ state, commit }) {
        commit("EVIL_MUTATION");
      }
    },
    getters: {
      getIsEvil(state) {
        return state.isEvil;
      }
    }
  });
};

export default checkEvil;
