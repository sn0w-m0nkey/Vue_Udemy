<template>
    <the-navigation @set-page="setActivePage"></the-navigation>
    <main>
        <component :is="activePage"></component>
    </main>
    
</template>

<script>
import TheNavigation from '@/components/AdvancedFeatures/using-routing/nav/TheNavigation.vue';
import TeamsList from '@/components/AdvancedFeatures/using-routing/teams/TeamsList.vue';
import UsersList from '@/components/AdvancedFeatures/using-routing/users/UsersList.vue';
import TeamMembers from '@/components/AdvancedFeatures/using-routing/teams/TeamMembers.vue';

export default {
    name: "UsingRouting",
    components: {
        TheNavigation,
        TeamsList,
        UsersList,
        TeamMembers
    },
    data() {
        return {
            activePage: '',
            teams: [
                { id: 't1', name: 'Frontend Engineers', members: ['u1', 'u2'] },
                { id: 't2', name: 'Backend Engineers', members: ['u1', 'u2', 'u3'] },
                { id: 't3', name: 'Client Consulting', members: ['u4', 'u5'] },
            ],
            users: [
                { id: 'u1', fullName: 'Max Schwarz', role: 'Engineer' },
                { id: 'u2', fullName: 'Praveen Kumar', role: 'Engineer' },
                { id: 'u3', fullName: 'Julie Jones', role: 'Engineer' },
                { id: 'u4', fullName: 'Alex Blackfield', role: 'Consultant' },
                { id: 'u5', fullName: 'Marie Smith', role: 'Consultant' },
            ],
        };
    },
    props: ['teamId'],
    provide() {
        return {
            teams: this.teams,
            users: this.users,
        };
    },
    methods: {
        setActivePage(page) {
            this.activePage = page;
        },
        loadPage(route) {
            if (route.params.teamId) {
                this.activePage = 'team-members';
            } else if (route.params.activePage) {
                this.activePage = this.$route.params.activePage;
            } else {
                this.activePage = 'teams-list';
            }
        }
    },
    created() {
        this.loadPage(this.$route);
    },
    watch: {
        $route(newRoute) {
            this.loadPage(newRoute);
        },
    },
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
}
</style>