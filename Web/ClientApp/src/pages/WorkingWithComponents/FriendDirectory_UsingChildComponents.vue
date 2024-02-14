<template>
    <header>
        <h1>Friend List</h1>
    </header>
    <section id="app">
        <new-friend @add-friend="addFriend"></new-friend>
        <ul>
            <friend-contact v-for="friend in friends"
                :key="friend.id"
                :id="friend.id"
                :name="friend.name"
                :phone-number="friend.phone"
                :email-address="friend.email"
                :is-favourite="friend.isFavourite"
                @toggle-favourite="toggleFavouriteStatus"
                @delete="deleteFriend"
            ></friend-contact>
        </ul>
    </section>
</template>

<script>
import NewFriend from "@/components/WorkingWithComponents/FriendDirectory/NewFriend"
import FriendContact from "@/components/WorkingWithComponents/FriendDirectory/FriendContact"

export default {
    name: "FriendDirectory_UsingChildComponents",
    components: {NewFriend, FriendContact},
    data() {
        return {
            friends: [
                {
                    id: 'manuel',
                    name: 'Manuel Lorenz',
                    phone: '01234 5678 991',
                    email: 'manuel@localhost.com',
                    isFavourite: true
                },
                {
                    id: 'julie',
                    name: 'Julies Jones',
                    phone: '09876 543 221',
                    email: 'julie@localhost.com',
                },
            ]
        }
    },
    methods: {
        addFriend(name, phone, email) {
            const newFriend = {
                id: new Date().toISOString(),
                name: name,
                phone: phone,
                email: email,
                isFavourite: false
            };
            this.friends.push(newFriend);
        },
        toggleFavouriteStatus(friendId) {
            const friend = this.friends.find(friend => friend.id === friendId);
            friend.isFavourite = !friend.isFavourite;
        },
        deleteFriend(friendId) {
            this.friends = this.friends.filter(friend => friend.id !== friendId);
        }
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
        background-color: #58004d;
        color: white;
        text-align: center;
        width: 90%;
        max-width: 40rem;
    }

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
</style>