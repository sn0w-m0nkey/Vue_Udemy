export default {
    incrementCounter(state) {
        state.counter++;
    },
    increaseCounter(state, payload) {
        state.counter = state.counter + payload.value;
    },
    // Bad! mutations must be synchronous
    incrementCounterAfterDelay(state) {
        setTimeout(() => {
            state.counter++;
        }, 1000)
    },
}