<template>
    <h3>Counter using getter: {{ counter }}</h3>
    <h3>Counter using mapGetters: {{ finalCounter }}</h3>
    <p>Wont show anything cos it's trying to access a different state: {{ testAuth }}</p>
    <p>Will work cos it's using rootState: {{ testAuthUsingRootState }}</p>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: "TheCounter",
    computed: {
        counter() {
            return this.$store.getters.finalCounter;
        },
        //...mapGetters(['finalCounter'])
        // ...mapGetters({
        //     finalCount: 'finalCounter'
        // })
        ...mapGetters('numbers', ['finalCounter', 'testAuth', 'testAuthUsingRootState']) // namespaced store
    },
}
</script>

<style scoped>

</style>