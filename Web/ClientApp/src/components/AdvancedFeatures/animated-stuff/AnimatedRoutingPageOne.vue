<template>
    <div class="container">
        <h2>Animated Routing Page One</h2>
        <router-link :to="{ name: 'AnimatedRoutingPageTwo'}">Page Two</router-link>
    </div>
</template>

<script>
export default {
    name: "AnimatedRoutingPageOne"
}
</script>

<style scoped>

</style>