<template>
    <nav-menu></nav-menu>
    <router-view></router-view>
</template>

<script>
import NavMenu from './components/NavMenu.vue'

export default {
    name: 'App',
    components: {
        NavMenu
    },
    created() {
        //this.$store.dispatch('tryLogin'); // TODO: tutorial says this should be here but I got it working in the router but not here
    }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");
/*@import url('https://fonts.googleapis.com/css2?family=Jost&display=swap');*/

#myApp, html {
    /*font-family: Roboto, Jost, Avenir, Helvetica, Arial, sans-serif;*/
    font-family: "Roboto", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

body {
    margin: 0;
}

form {
    text-align: left;
}

.form-control {
    border: none;
    text-align: left;
}

.form-control input[type='radio'] {
    margin-right: 5px;
}

a.router-link-active {
    font-weight: bold;
}

li.nav-item a.nav-link span.project {
    color: green;
    font-style: italic;
}
</style>
