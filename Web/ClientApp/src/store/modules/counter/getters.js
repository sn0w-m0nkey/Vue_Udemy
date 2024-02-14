export default {
    testAuth(state, getters, rootState, rootGetters) {
        return state.isLoggedIn; // wont work because isLoggedIn is in another scope
    },
    testAuthUsingRootState(state, getters, rootState, rootGetters) {
        return rootState.isLoggedIn; // will work because rootScope is used
    },
    finalCounter(state, getters) {
        return state.counter;
    },
    normalizedCounter(_, getters) {
        const finalCounter = getters.finalCounter;
        if (finalCounter < 0) {
            return 0;
        }
        if (finalCounter > 100) {
            return 100;
        }
        return finalCounter;
    },
}