<template>
    <div class="container">
        <h2>Animated Routing Page Two</h2>
        <router-link :to="{ name: 'AnimatedRoutingPageOne'}">Page One</router-link>
    </div>
</template>

<script>
export default {
    name: "AnimatedRoutingPageTwo"
}
</script>

<style scoped>

</style>