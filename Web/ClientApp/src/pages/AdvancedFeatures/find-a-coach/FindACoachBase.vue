<template>
    <coach-header></coach-header>
    <router-view v-slot="slotProps">
        <transition name="route" mode="out-in">
            <component :is="slotProps.Component"></component>
        </transition>
    </router-view>
</template>

<script>
import CoachHeader from '@/components/AdvancedFeatures/coach-project/UI/CoachHeader'

export default {
    name: "FindACoachBase",
    components: { CoachHeader },
    computed: {
        didAutoLogout()  {
            return this.$store.getters.didAutoLogout;
        }
    },
    watch: {
        didAutoLogout(newValue, oldValue) {
            if (newValue && newValue !== oldValue) {
                this.$router.replace({name: 'CoachList'});
            }
        }
    }
}
</script>

<style scoped>
    .route-enter-from {
        opacity: 0;
        transform: translateY(-30px);
    }
    .route-leave-to {
        opacity: 0;
        transform: translateY(30px);
    }
    
    .route-enter-active {
        transition: all 0.3s ease-out;
    }
    .route-leave-active {
        transition: all 0.3s ease-in;
    }
    
    .route-enter-to,
    .route-leave-from {
        opacity: 1;
        transform: translateY(0);
    }
    
</style>