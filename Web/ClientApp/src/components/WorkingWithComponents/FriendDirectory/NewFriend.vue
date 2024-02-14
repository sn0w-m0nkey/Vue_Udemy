<template>
    <form @submit.prevent="submitData">
        <div>
            <label>Name</label>
            <input type="text" v-model="enteredName" />
        </div>
        <div>
            <label>Phone</label>
            <input type="tel" v-model="enteredPhone" />
        </div>
        <div>
            <label>E-Mail</label>
            <input type="email" v-model="enteredEmail" />
        </div>
        <div>
            <button>Add Friend</button>
        </div>
    </form>
</template>

<script>
export default {
    name: "NewFriend",
    emits: ['add-friend'],
    data() {
        return {
            enteredName: '',
            enteredPhone: '',
            enteredEmail: ''
        }
    },
    methods: {
        submitData() {
            this.$emit('add-friend', this.enteredName, this.enteredPhone, this.enteredEmail);
        }
    }
}
</script>

<style scoped>
    form {
        text-align: center;
    }
    #app input {
        font: inherit;
        padding: 0.15rem;
    }
    #app label {
        font-weight: bold;
        margin-right: 1rem;
        width: 7rem;
        display: inline-block;
    }
    #app form div {
        margin: 1rem 0;
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
</style>