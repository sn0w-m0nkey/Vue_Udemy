<template>
    <div id="app">
        <the-header>Dynamic Components</the-header>
        <button @click="setSelectedComponent('active-goals')">Active Goals</button>
        <button @click="setSelectedComponent('manage-goals')">Manage Goals</button>
<!--        <active-goals v-if="selectedComponent === 'active-goals'"></active-goals>-->
<!--        <manage-goals v-if="selectedComponent === 'manage-goals'"></manage-goals>-->
        
        <keep-alive>
            <component :is="selectedComponent"></component>
        </keep-alive>
    </div>
</template>



<script>
import TheHeader from "@/components/Layout/TheHeader";
import ActiveGoals from "@/components/WorkingWithComponents/DynamicComponents/ActiveGoals";
import ManageGoals from "@/components/WorkingWithComponents/DynamicComponents/ManageGoals";

export default {
    name: "UsingSlots",
    components: { TheHeader, ActiveGoals, ManageGoals },
    data() {
        return {
            selectedComponent: 'active-goals',
            activeUser: {
                name: 'Maximilian Schwarzmüller',
                description: 'Site owner and admin',
                role: 'admin',
            },
        };
    },
    methods: {
        setSelectedComponent(comp) {
            this.selectedComponent = comp;
        } 
    }
}
</script>

<style scoped>
    html {
        font-family: sans-serif;
    }
    
    body {
        margin: 0;
    }
</style>