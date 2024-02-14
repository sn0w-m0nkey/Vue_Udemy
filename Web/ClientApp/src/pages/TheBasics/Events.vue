<template>
    <header>
        <h1>Vue Events</h1>
    </header>
    <section id="events">
        <h2>Events in Action</h2>
        <div>
            <button @click="counter++">Add</button>
            <button @click="counter--">Remove</button>
        </div>
        <div>
            <button v-on:click="add(1)">Add using Method</button>
            <button v-on:click="reduce(1)">Reduce using Method</button>
        </div>
        <div>
            <button v-on:click="add(5)">Add 5</button>
            <button v-on:click="reduce(5)">Reduce 5</button>
        </div>
        <p v-once>Starting Counter: {{ counter }}</p>
        <p>Result: {{ counter }}</p>
        
        <input type="text"
               :value="name"
               @input="setName($event)"
               @keyup.enter="confirmName"
               placeholder="First name">
        <input type="text"
               v-bind:value="lastName"
               v-on:input="setLastName($event)"
               v-on:keyup.enter="confirmName"
               placeholder="Last name">
        <input type="text" v-model="confirmedName" placeholder="Confirmed Name">
        <p>Confirmed Name: {{ confirmedName }}</p>
        <p>Full Name (method): {{ outputFullName() }}</p>
        <p>Full Name (computed - best in this scenario): {{ fullNameComputed }}</p>
        <p>Full name (watch): {{ fullName }}</p>
        <button v-on:click="resetInput">Reset Input</button>

        <form v-on:submit.prevent="submitForm">
            <input type="text">
            <button>Sign Up</button>
        </form>
    </section>
</template>

<script>
export default {
    name: "Events",
    data() {
        return {
            counter: 0,
            name: '',
            lastName: '',
            fullName: '',
            confirmedName: ''
        };
    },
    computed: {
        fullNameComputed() {
            if (this.name === '' || this.lastName === '') {
                return '';
            }
            return this.name + ' ' + this.lastName;
        }
    },
    watch: {
        // this is how watches should be used, not like name & lastName below
        counter(newValue, oldValue) {
            if (newValue > 50) {
                const that = this;
                setTimeout(function () {
                    that.counter = 0;
                }, 2000);
            }  
        },
        // 2 watches are required instead of one computed
        name(newValue, oldValue) {
            if (newValue === '' || this.lastName === '') {
                this.fullName = '';
            } else {
                this.fullName = newValue + ' ' + this.lastName;    
            }
        },
        lastName(newValue, oldValue) {
            if (newValue === '' || this.name === '') {
                this.fullName = '';
            } else {
                this.fullName = this.name + ' ' + newValue;
            }
        },
    },
    methods: {
        add(num) {
            this.counter += num;
        },
        reduce(num) {
            this.counter -= num;
        },

        setName(event) {
            this.name = event.target.value;
        },
        setLastName(event) {
            this.lastName = event.target.value;
        },
        confirmName() {
            this.confirmedName = this.fullName;
        },
        outputFullName() { // only use this when you want it re-evaluated when ANYTHING on the page changes
            if (this.name === '' || this.lastName === '') {
                return '';
            }
            return this.name + ' ' + this.lastName;
        },
        resetInput() {
            this.name = '';
            this.lastName = '';
            this.confirmedName = '';
        },

        submitForm() {
            alert('Submitted!');
        },

    }
}
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

#events {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    margin: 3rem auto;
    border-radius: 10px;
    padding: 1rem;
    text-align: center;
    width: 90%;
    max-width: 40rem;
}

#events h2 {
    font-size: 2rem;
    border-bottom: 4px solid #ccc;
    color: #4fc08d;
    margin: 0 0 1rem 0;
}

#events p {
    font-size: 1.25rem;
    font-weight: bold;
    border: 1px solid #4fc08d;
    background-color: #4fc08d;
    color: white;
    padding: 0.5rem;
    border-radius: 25px;
}

#events input {
    font: inherit;
    border: 1px solid #ccc;
}

#events input:focus {
    outline: none;
    border-color: #1b995e;
    background-color: #d7fdeb;
}

#events button {
    font: inherit;
    cursor: pointer;
    border: 1px solid #ff0077;
    background-color: #ff0077;
    color: white;
    padding: 0.05rem 1rem;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
    border-radius: 20px;
    margin: 0 1rem 0.5rem;
}

#events button:hover,
#events button:active {
    background-color: #ec3169;
    border-color: #ec3169;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
</style>