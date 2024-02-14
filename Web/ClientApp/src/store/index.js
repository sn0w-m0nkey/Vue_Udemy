import { createStore } from 'vuex'

import counterModule from './modules/counter'

import coachModule from './modules/coaches'
import coachRequestModule from './modules/requests'
import authModule from './modules/auth'

import rootMutations from './mutations'
import rootActions from './actions'
import rootGetters from './getters'

const store = createStore({
    modules: {
        numbers: counterModule,
        coaches: coachModule,
        requests: coachRequestModule,
        auth: authModule
    },
    state() {
        return {
            isLoggedIn: false,
        }
    },
    mutations: rootMutations,
    actions: rootActions,
    getters: rootGetters
});

export default store;