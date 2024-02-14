<template>
    <the-header title="Remember Me"></the-header>
    <the-resources></the-resources>
</template>

<script>
import TheResources from "@/components/WorkingWithComponents/learning-resources/TheResources";

export default {
    name: "TheLearningResourcesApp",
    components: {
        TheResources
    },
    data() {
        return {

        }
    }
}
</script>

<style scoped>
    /*@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');*/
    
    * {
        box-sizing: border-box;
    }
    
    html {
        font-family: 'Roboto', sans-serif;
    }
    
    body {
        margin: 0;
    }
</style>