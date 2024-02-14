<template>
    <section id="app">
        <h2>How Vue Works</h2>
        <input type="text" @input="saveInput" placeholder="Message 1">
        <input type="text" ref="userText" placeholder="Message 2">
        <button @click="setText">Set Text</button>
        <p>{{ message }}</p>
        <p>{{ message2 }}</p>
    </section>
    <section id="app2">
        
    </section>
</template>

<script>
    export default {
        name: "BehindTheScenes",
        data() {
            return {
                currentUserInput: '',
                message: 'Vue is great!',
                message2: 'Message 2'
            };
        },
        methods: {
            saveInput(event) {
                this.currentUserInput = event.target.value;
            },
            setText() {
                this.message = this.currentUserInput;
                this.message2 = this.$refs.userText.value;
                console.log(this.$refs.userText);
                console.dir(this.$refs.userText);
            },
        },
        // Creation Lifecycle
        beforeCreate() {
            console.log('beforeCreate()');
        },
        created() {
            console.log('created()');
        },
        beforeMount() {
            console.log('beforeMount()');
        },
        mounted() {
            console.log('mounted()');
        },
        // Update Lifecycle
        beforeUpdate() {
            console.log('beforeUpdate()');
        },
        updated() {
            console.log('updated()');
        },
        // Unmount Lifecycle
        beforeUnmount() {
            console.log('beforeUnmount()');
        },
        unmounted() {
            console.log('unmounted()'); // can call with app.unmount()
        },
    }
    
    // wont work inside a component
    //import Vue from 'vue'
    //let app2 = Vue.createApp()
    //app2.mount('#app2')
    
    const data = {
        message: 'Hello!',
        longMessage: 'Hello! World!'
    }
    
    const handler = {
        set(target, key, value) {
            if (key === 'message') {
                target.longMessage = value + ' World!';
            }
            target.message = value;
            
            //console.log(target);
            //console.log(key);
            //console.log(value);
            
            return true;
        }
    }
    
    const proxy = new Proxy(data, handler);
    
    proxy.message = "Hello!!!!";
    
    //console.log(proxy.longMessage);
</script>

<style scoped>
    * {
        box-sizing: border-box;
    }
    
    html {
        font-family: 'Jost', sans-serif;
    }
    
    body {
        margin: 0;
    }
    
    header {
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
        margin: 3rem auto;
        border-radius: 10px;
        padding: 1rem;
        background-color: #4fc08d;
        color: white;
        text-align: center;
        width: 90%;
        max-width: 40rem;
    }
    
    #app {
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
        margin: 3rem auto;
        border-radius: 10px;
        padding: 1rem;
        text-align: center;
        width: 90%;
        max-width: 40rem;
    }
    
    #app h2 {
        font-size: 2rem;
        border-bottom: 4px solid #ccc;
        color: #4fc08d;
        margin: 0 0 1rem 0;
    }
    
    #app p {
        font-size: 1.25rem;
        font-weight: bold;
        border: 1px solid #4fc08d;
        background-color: #4fc08d;
        color: white;
        padding: 0.5rem;
        border-radius: 25px;
    }
    
    #app input {
        font: inherit;
        border: 1px solid #ccc;
    }
    
    #app input:focus {
        outline: none;
        border-color: #1b995e;
        background-color: #d7fdeb;
    }
    
    #app button {
        font: inherit;
        cursor: pointer;
        border: 1px solid #ff0077;
        background-color: #ff0077;
        color: white;
        padding: 0.05rem 1rem;
        box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
    }
    
    #app button:hover,
    #app button:active {
        background-color: #ec3169;
        border-color: #ec3169;
        box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
    }

</style>