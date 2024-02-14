<template>
    <the-counter></the-counter>
    
    <base-container title="Vuex" v-if="isAuth">
        <favourite-value></favourite-value>
        <button @click="addOne">Add 1 using mutation</button>
        <button @click="addTen">Increase by 10 using mutation</button>
        <button @click="addTenAfterDelayUsingMutation">Add 10 after delay using mutation (bad)</button>
        <button @click="addOneUsingAction">Add 1 using action</button>
        <button @click="addTenAfterDelayUsingAction">Add 10 after delay using action (ok)</button>
        <change-counter></change-counter>
    </base-container>
    
    <base-container title="Auth">
        <user-auth></user-auth>
    </base-container>
</template>

<script>
import BaseContainer from '@/components/UI/BaseContainer';
import TheCounter from '@/components/AdvancedFeatures/vuex-state-management/TheCounter'
import ChangeCounter from '@/components/AdvancedFeatures/vuex-state-management/ChangeCounter'
import FavouriteValue from '@/components/AdvancedFeatures/vuex-state-management/FavouriteValue'
import UserAuth from '@/components/AdvancedFeatures/vuex-state-management/UserAuth'

export default {
    name: "VuexStateManagement",
    components: {
        BaseContainer,
        TheCounter,
        ChangeCounter,
        FavouriteValue,
        UserAuth
    },
    computed: {
        isAuth() {
            return this.$store.getters.userIsAuthenticated;
        }
    },
    methods: {
        addOne() {
            // not good to update the store from components, use mutations or actions
            //this.$store.state.counter++;
            this.$store.commit('numbers/incrementCounter');
        },
        addTen() {
            //this.$store.commit('increaseCounter', { value:10 });
            this.$store.commit({
                type: 'numbers/increaseCounter',
                value: 10
            })
        },
        addTenAfterDelayUsingMutation() {
            this.$store.commit('numbers/incrementCounterAfterDelay');
        },
        addOneUsingAction() {
            this.$store.dispatch({
                //type: 'incrementCounter',
                type: 'numbers/incrementCounter',
            })
        },
        addTenAfterDelayUsingAction() {
            this.$store.dispatch({
                //type: 'increaseCounterAfterDelay',
                type: 'numbers/increaseCounterAfterDelay',
                value: 10
            })
        }
    }
}
</script>

<style scoped>
* {
    box-sizing: border-box;
}

html {
    font-family: sans-serif;
}

body {
    margin: 0;
}
button {
    display: block;
    margin: auto;
}
</style>