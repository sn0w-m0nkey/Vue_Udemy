<template>
    <learning-survey></learning-survey>
    <user-experiences></user-experiences>
</template>

<script>
import LearningSurvey from '@/components/AdvancedFeatures/http-requests/LearningSurvey.vue';
import UserExperiences from '@/components/AdvancedFeatures/http-requests/UserExperiences.vue';

export default {
    name: "HttpRequests",
    components: {
        LearningSurvey,
        UserExperiences,
    },
    data() {
        return {

        };
    },
    methods: {
        
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