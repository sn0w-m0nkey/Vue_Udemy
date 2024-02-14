<template>
    <the-form></the-form>
</template>

<script>
import TheForm from '@/components/AdvancedFeatures/using-forms/TheForm'

export default {
    name: "UsingForms",
    components: {
        TheForm
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
        background-color: #292929;
    }
</style>