<template>
    <header>
        <nav>
            <ul>
<!--                <li>-->
<!--                    <button @click="setActivePage('teams-list')">Set Teams</button>-->
<!--                    <button @click="setActivePage('users-list')">Set Users</button>-->
<!--                </li>-->
                <li>
                    <router-link :to="{ name: 'UsingRouting', params: {activePage: 'teams-list'} }">Teams List Link</router-link>
                    <router-link :to="{ name: 'UsingRouting', params: {activePage: 'users-list'} }">Users List Link</router-link>
                </li>
                
                <li>
                    <button @click="navigateToPage('/AdvancedFeatures/UsingRouting/teams-list')">Teams Button RouterPush</button>
                    <button @click="navigateToPage('/AdvancedFeatures/UsingRouting/users-list')">Users Button RouterPush</button>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    name: "TheNavigation",
    emits: ['set-page'],
    methods: {
        setActivePage(page) {
            this.$emit('set-page', page);
        },
        navigateToPage(page) {
            this.$router.push(page);
        }
    },
};
</script>

<style scoped>
header {
    width: 100%;
    height: 8rem;
    background-color: #11005c;
}

nav {
    height: 100%;
}

ul {
    list-style: none;
    margin: 0;
    padding: 0;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

li {
    margin: 0 2rem;
}

button, a {
    text-decoration: none;
    font: inherit;
    background: transparent;
    border: 1px solid transparent;
    cursor: pointer;
    color: white;
    padding: 0.5rem 1.5rem;
    display: block;
}

button:hover,
button:active,
a:hover,
a:active {
    color: #f1a80a;
    border-color: #f1a80a;
    background-color: #1a037e;
}
</style>