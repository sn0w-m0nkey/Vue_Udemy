<template>
    <div>
        <h2>Manage Goals</h2>
        <input type="text" ref="goal">
        <button @click="setGoal">Set Goal</button>
                
        <!-- Teleport moves the enclosed html wherever you want -->
        <teleport to="#myApp">
            <base-dialog  v-if="inputIsInvalid">
                <template #header>
                    <h2>Input is invalid!</h2>
                </template>
                <template #default>
                    <p>Goal must not be empty</p>    
                </template>
                <template #actions>
                    <button @click="confirmError">OK</button>    
                </template>
            </base-dialog>
<!--            <error-alert v-if="inputIsInvalid">-->
<!--                <h2>Input is invalid!</h2>-->
<!--                <p>Goal must not be empty</p>-->
<!--                <button @click="confirmError">OK</button>-->
<!--            </error-alert>-->
        </teleport>
    </div>
</template>

<script>
import ErrorAlert from './ErrorAlert'

export default {
    name: "ManageGoals",
    components: {
        //ErrorAlert 
    },
    data() {
        return {
            inputIsInvalid: false
        }
    },
    methods: {
        setGoal() {
            const enteredValue = this.$refs.goal.value;
            if (enteredValue === '') {
                this.inputIsInvalid = true;
                //alert('Input must not be empty!');
            }
        },
        confirmError() {
            this.inputIsInvalid = false;
        }
    }
}
</script>

<style scoped>

</style>