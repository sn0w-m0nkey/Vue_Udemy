<template>
    <section class="container">
        <h2>INDIVIDUAL REFS</h2>
        <h3>{{ userNameRef }}</h3>
        <h3>{{ ageRef }}</h3>

        <hr>
        
        <h2>USER REF OBJECT</h2>
        <h3>{{ userRef.name }}</h3>
        <h3>{{ userRef.age }}</h3>
        <h3>{{ userRef }}</h3>
        <hr>
        
        <h2>REACTIVE USER OBJECT</h2>
        <h3>{{ userReactive.name }}</h3>
        <h3>{{ userReactive.age }}</h3>
        <h3>{{ userReactive }}</h3>

        <hr>
        
        <h2>REACTIVE USER OBJECT TO-REFS</h2>
        <h3>{{ userToRefs.name.value }}</h3>
        <h3>{{ userToRefs.age.value }}</h3>
        <h3>{{ userToRefs }}</h3>

        <hr>
        
        <button @click="changeAge">Change Age to 33</button>
        <h3>{{ changeAge }}</h3>
    </section>
</template>

<script>
import { ref, reactive } from 'vue';
//import { isRef, isReactive } from 'vue'; // helper methods // TODO: Must provide the entire ref or reactive, not properties of them
import { toRefs } from 'vue';

export default {
    name: "IntroductionToTheCompositionApi",
    setup() {
        // ref is best used with single values
        const uName = ref('Maximilian');
        const uAge = ref(31);
        setTimeout(() => {
            uName.value = 'Max';
            uAge.value = 32;
        }, 2000)
        
        // using ref with an object means you need to call object.value.property
        const userRefObject = ref({
            name: 'Maximilian',
            age: 31
        })
        setTimeout(() => {
            userRefObject.value.name = 'Max';
            userRefObject.value.age = 32;
        }, 2000)
        console.log('userRefObject', userRefObject);
        
        // reactive needs objects - you dont need to use .value
        const user = reactive({
            name: 'Maximilian',
            age: 31
        })
        setTimeout(() => {
            user.name = 'Max';
            user.age = 32;
        }, 2000)

        const userRefs = toRefs(user); // just an example, could use this to replace userNameRef and ageRef
        
        function changeAgeFunction() {
            userRefObject.value.age = 33;
            uAge.value = 33;
            user.age = 33;
        }
        
        return {
            userNameRef: uName,
            ageRef: uAge,
            userRef: userRefObject,
            userReactive: user, // reactive object is responsive, but individual parameters of the reactive are not, so provide the whole object, not individual params of objects, or call toRefs({}) 
            userToRefs: userRefs,
            changeAge: changeAgeFunction
        };
    },
    // DATA IS REPLACED BY SETUP
    // data() {
    //     return {
    //         userName: 'Maximilian',
    //     };
    // },
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

.container {
    margin: 3rem auto;
    max-width: 30rem;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 1rem;
    text-align: center;
}
</style>