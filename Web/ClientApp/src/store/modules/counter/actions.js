export default {
    // shouldn't modify state from actions, always use a mutation from an action
    incrementCounter(context) {
        context.commit('incrementCounter');
    },
    // actions are allowed async code
    increaseCounterAfterDelay(context, payload) {
        setTimeout(() => {
            context.commit('increaseCounter', payload);
        }, 1000);
    },
}