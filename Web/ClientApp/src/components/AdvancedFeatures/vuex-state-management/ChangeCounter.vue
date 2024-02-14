<template>
    <button @click="addOne">Add 1 from ChangeCounter component</button>
    <button @click="inc">Add 1 from ChangeCounter component using mapActions</button>
    <button @click="increase({value: 5})">Add 5 after delay from ChangeCounter component using mapActions</button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: "ChangeCounter",
    methods: {
        addOne() {
            //this.$store.state.counter++;
            this.$store.commit('numbers/incrementCounter');
        },
        //...mapActions(['incrementCounter', 'increaseCounterAfterDelay'])
        // ...mapActions({
        //     inc: 'incrementCounter',
        //     increase: 'increaseCounterAfterDelay'
        // })
        
        // namespaced store
        ...mapActions('numbers', {
            inc: 'incrementCounter',
            increase: 'increaseCounterAfterDelay'
        })
    }
}
</script>

<style scoped>

</style>