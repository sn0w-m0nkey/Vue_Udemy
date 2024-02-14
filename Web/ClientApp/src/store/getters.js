export default {
    userIsAuthenticated(state, getters, rootState, rootGetters) {
        return state.isLoggedIn;
    },
}