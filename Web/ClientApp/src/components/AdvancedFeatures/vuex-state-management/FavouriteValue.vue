<template>
    <h3>{{ counter }}</h3>
</template>

<script>
export default {
    name: "FavouriteValue",
    computed: {
        counter() {
            //return this.$store.state.counter * 2;
            //return this.$store.getters.normalizedCounter;
            return this.$store.getters['numbers/normalizedCounter']; // namespaced store

                
        }
    },
}
</script>

<style scoped>

</style>