<template>
    <section>
        <base-card>
            <h2>Page not found</h2>
            <base-button link :to="{ name: 'Home' }">Go Home</base-button>
        </base-card>
    </section>
</template>

<script>
export default {
    name: "NotFound",
    
}
</script>

<style scoped>

</style>