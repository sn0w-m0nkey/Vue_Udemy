<template>
    <li>
        <h2>{{ name }} {{ isFavourite === true ? '(Favourite)' : '' }}</h2>
        <button @click="toggleFavourite">Toggle Favourite</button>
        <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
        <button @click="$emit('delete', id)">Delete</button>
        <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong> {{ phoneNumber }}</li>
            <li><strong>Email:</strong> {{ emailAddress }}</li>
        </ul>
        
    </li> 
</template>

<script>
export default {
    name: "FriendContact",
    // props: [
    //     'name',
    //     'phoneNumber',
    //     'emailAddress',
    //     'isFavourite'
    // ],
    props: {
        id: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        phoneNumber: {
            type: String,
            required: true
        },
        emailAddress: {
            type: String,
            required: true,
            // validator: function(value) {
            //     return EMAIL_REGEX
            // }
        },
        isFavourite: {
            type: Boolean,
            required: false,
            default: false
        },
    },
    emits: ['toggle-favourite', 'delete'],
    // emits: {
    //     'toggle-favourite': function(id) {
    //         if (id) {
    //             return true
    //         } else {
    //             console.warn('Id is missing!')
    //             return false;
    //         }
    //     }
    // },
    data() {
        return {
            detailsAreVisible: false,
            friendIsFavourite: this.isFavourite
        }
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        },
        toggleFavourite() {
            this.$emit('toggle-favourite', this.id);
        },
        deleteFriend() {
            this.$emit('delete-friend', this.id);
        }
    }
}
</script>

<style scoped>
    #app ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }
    
    #app li {
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
        margin: 1rem auto;
        border-radius: 10px;
        padding: 1rem;
        text-align: center;
        width: 90%;
        max-width: 40rem;
    }

    #app h2 {
        font-size: 2rem;
        border-bottom: 4px solid #ccc;
        color: #58004d;
        margin: 0 0 1rem 0;
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