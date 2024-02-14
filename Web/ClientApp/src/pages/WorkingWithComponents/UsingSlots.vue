<template>
    <div id="app">
        <!-- <TheHeader /> -->
        <the-header>Slots</the-header>
        <badge-list></badge-list>
        <user-info
            :full-name="activeUser.name"
            :info-text="activeUser.description"
            :role="activeUser.role"
        ></user-info>
        
        <CourseGoals>
            <template #default="slotProps">
                <h2>{{ slotProps.item }}</h2>
                <p>{{ slotProps['another-prop'] }}</p>
            </template>
        </CourseGoals>
<!--        <CourseGoals #default="slotProps">-->
<!--            <h2>{{ slotProps.item }}</h2>-->
<!--            <p>{{ slotProps['another-prop'] }}</p>-->
<!--        </CourseGoals>-->
    </div>
</template>



<script>
import TheHeader from "@/components/Layout/TheHeader";
import BadgeList from "@/components/WorkingWithComponents/UsingSlots/BadgeList";
import UserInfo from "@/components/WorkingWithComponents/UsingSlots/UserInfo";

import CourseGoals from "@/components/WorkingWithComponents/UsingSlots/CourseGoals";


export default {
    name: "UsingSlots",
    components: {
        TheHeader: TheHeader, 
        'badge-list': BadgeList, 
        UserInfo, 
        CourseGoals,
    },
    data() {
        return {
            activeUser: {
                name: 'Maximilian Schwarzmüller',
                description: 'Site owner and admin',
                role: 'admin',
            },
        };
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