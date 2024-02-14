<template>
    <section>
        <base-card>
            <h2>Submitted Experiences</h2>
            <div>
                <base-button @click="loadExperiences">Load Submitted Experiences</base-button>
            </div>
            <p v-if="isLoading">Loading...</p>
            <p v-else-if="!isLoading && error">{{ error }}</p>
            <p v-else-if="!isLoading && (results && results.length === 0)">No stored experiences found. Add some</p>
            <ul v-else-if="!isLoading && results && results.length > 0">
                <survey-result
                    v-for="result in results"
                    :key="result.id"
                    :name="result.name"
                    :rating="result.rating"
                ></survey-result>
            </ul>
        </base-card>
    </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

import axios from "axios";

export default {
    name: "UserExperiences",
    components: {
        SurveyResult,
    },
    data() {
        return {
            results: [],
            isLoading: false,
            error: null
        }
    },
    methods: {
        loadExperiences() {
            this.isLoading = true;
            this.error = null;
            
            axios.get('https://udemy-vue-e734c-default-rtdb.europe-west1.firebasedatabase.app/surveys.json')
                .then((response) => {
                    this.isLoading = false;

                    const results  = [];
                    for (const id in response.data) {
                        const item = response.data[id];
                        results.push({
                            id: item.id,
                            name: item.name,
                            rating: item.rating
                        });
                    }

                    this.results = results;
                })
            .catch((error) => {
                this.isLoading = false;
                this.error = 'Error';
            });
            
            fetch('https://udemy-vue-e734c-default-rtdb.europe-west1.firebasedatabase.app/surveys.json')
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
            })
            .then((data) => {
                this.isLoading = false;
                const results  = [];                
                for (const id in data) {
                    const item = data[id];
                    results.push({
                        id: id, 
                        name: item.name,
                        rating: item.rating
                    });
                }
                this.results = results;
            })
            .catch((error) => {
                this.isLoading = false;
                this.error = 'Error';
            });
        }
    },
    mounted() {
        this.loadExperiences();
    }
}
</script>

<style scoped>
ul {
    list-style: none;
    margin: 0;
    padding: 0;
}
</style>