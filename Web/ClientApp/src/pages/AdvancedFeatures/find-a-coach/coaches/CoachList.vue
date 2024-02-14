<template>
    <div>
        <base-dialog2 :show="!!error" title="An error occurred!" @close="handleError">
            <p>{{ error }}</p>
        </base-dialog2>
        <section>
            <coach-filter @change-filter="setFilters"></coach-filter>
        </section>
        <section>
            <base-card>
                <div class="controls">
                    <base-button mode="outline" @click="loadCoaches(true)">Refresh</base-button>
                    <!-- // TODO: these should work with an object: -->
                    <base-button link to="/AdvancedFeatures/FindACoachBase/Auth?redirect=AdvancedFeatures/FindACoachBase/Register" v-if="!isLoggedIn">Login to Register as Coach</base-button>
                    <base-button v-if="isLoggedIn && !isCoach && !isLoading" link to="/AdvancedFeatures/FindACoachBase/Register">
                        Register as Coach
                    </base-button>
                </div>
                <div v-if="isLoading">
                    <base-spinner></base-spinner>
                </div>
                <ul v-else-if="hasCoaches">
                    <coach-item
                        v-for="coach in filteredCoaches" :key="coach.id"
                        :id="coach.id"
                        :first-name="coach.firstName"
                        :last-name="coach.lastName"
                        :rate="coach.hourlyRate"
                        :areas="coach.areas"
                    ></coach-item>
                </ul>
                <h3 v-else>No coaches found</h3>
            </base-card>
        </section>
    </div>
</template>

<script>
import CoachFilter from '@/components/AdvancedFeatures/coach-project/Coaches/CoachFilter'
import CoachItem from '@/components/AdvancedFeatures/coach-project/Coaches/CoachItem'

export default {
    name: "CoachList",
    components: {CoachItem, CoachFilter},
    data() {
        return {
            isLoading: false,
            error: null,
            activeFilters: {
                frontend: true,
                backend: true,
                career: true
            }
        }
    },
    computed: {
        isLoggedIn() {
            return this.$store.getters.isAuthenticated;  
        },
        isCoach() {
            return this.$store.getters['coaches/isCoach'];
        },
        filteredCoaches() {
            const coaches = this.$store.getters['coaches/coaches']
            return coaches.filter(coach => {
                if (this.activeFilters.frontend && coach.areas.includes('frontend'))
                    return true;
                if (this.activeFilters.backend && coach.areas.includes('backend'))
                    return true;
                if (this.activeFilters.career && coach.areas.includes('career'))
                    return true;
            })
        },
        hasCoaches() {
            return !this.isLoading && this.$store.getters['coaches/hasCoaches']
        }
    },
    created() {
        this.loadCoaches();
    },
    methods: {
        setFilters(updatedFilters) {
            this.activeFilters = updatedFilters;
        },
        async loadCoaches(refresh = false) {
            this.isLoading = true;

            try {
                await this.$store.dispatch('coaches/loadCoaches', {forceRefresh: refresh});
            } catch (error) {
                this.error = error.message || 'Something went wrong!';
            }

            this.isLoading = false;
        },
        handleError() {
            this.error = null;
        }
    }
}
</script>

<style scoped>
ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

.controls {
    display: flex;
    justify-content: space-between;
}
</style>