<template>
    <div>
        <router-view v-slot="slotProps">
            <transition name="fade-button" mode="out-in">
                <component :is="slotProps.Component"></component>
            </transition>
        </router-view>    
    </div>
    
    <div class="container">
        <users-list></users-list>
    </div>
    
    <h2></h2>
    <div class="container">
        <div class="block" :class="{animate: animatedBlock}"></div>
        <button @click="animateBlock">Animate</button>
    </div>
    
    <div class="container">
        <button @click="toggleParagraph">Toggle paragraph using transform</button>
        <transition>
            <p v-if="paragraphIsVisible">Transform paragraph using default classes</p>
        </transition>
    </div>
    <div class="container">
        <transition name="para2">
            <p v-if="paragraph2IsVisible">Transform paragraph using a custom class prefix</p>
        </transition>
        <button @click="toggleParagraph2">Toggle paragraph using transform with custom class prefix</button>
    </div>
    <div class="container">
        <button @click="toggleParagraph3">Toggle paragraph using animation and custom classes</button>
        <transition name="para3" enter-active-class="custom-enter-active">
            <p v-if="paragraph3IsVisible">Animated paragraph using animation and custom classes</p>
        </transition>
    </div>
    <div class="container">
        <button @click="toggleParagraph4">Toggle paragraph using javascript</button>
        <transition 
                    :css="false"
                    @before-enter="beforeEnter"
                    @enter="enter"
                    @after-enter="afterEnter"
                    @before-leave="beforeLeave"
                    @leave="leave"
                    @after-leave="afterLeave"
                    @enter-cancelled="enterCancelled"
                    @leave-cancelled="leaveCancelled">
            <p v-if="paragraph4IsVisible">Paragraph toggled with javascript</p>
        </transition>
    </div>
    
    <div class="container">
        <transition name="fade-button" mode="out-in">
            <button @click="showUsers" v-if="!usersAreVisible">Show Users</button>
            <button @click="hideUsers" v-else>Hide Users</button>
        </transition>
        <div v-if="usersAreVisible">
            Users
        </div>
    </div>
    
    <base-modal @close="hideDialog" :open="dialogIsVisible">
        <p>This is a test dialog!</p>
        <button @click="hideDialog">Close it!</button>
    </base-modal>
    <div class="container">
        <button @click="showDialog">Show Dialog</button>
    </div>
</template>

<script>
import UsersList from '@/components/AdvancedFeatures/animated-stuff/UsersList'

export default {
    name: "AnimationsAndTransitions",
    components: { UsersList },
    data() {
        return {
            animatedBlock: false,
            dialogIsVisible: false,
            paragraphIsVisible: false,
            paragraph2IsVisible: false,
            paragraph3IsVisible: false,
            paragraph4IsVisible: false,
            usersAreVisible: false,
            enterInterval: null,
            leaveInterval: null,
        };
    },
    methods: {
        animateBlock() {
            this.animatedBlock = !this.animatedBlock;
        },
        toggleParagraph() {
            this.paragraphIsVisible = !this.paragraphIsVisible;
        },
        toggleParagraph2() {
            this.paragraph2IsVisible = !this.paragraph2IsVisible;
        },
        toggleParagraph3() {
            this.paragraph3IsVisible = !this.paragraph3IsVisible;
        },
        toggleParagraph4() {
            this.paragraph4IsVisible = !this.paragraph4IsVisible;
        },
        
        beforeEnter(el) {
            console.log('beforeEnter', el)
            el.style.opacity = 0;
        },
        enter(el, done) {
            console.log('enter', el)
            let round = 1;
            this.enterInterval = setInterval(() => {
                el.style.opacity = round * 0.01;
                round++;
                if (round > 100) {
                    clearInterval(this.enterInterval);
                    done();
                }
            },20)
        },
        enterCancelled(el) {
            console.log('enterCancelled', el)
            clearInterval(this.enterInterval);
        },
        afterEnter(el) {
            console.log('afterEnter', el)
        },
        beforeLeave(el) {
            console.log('beforeLeave', el)
            el.style.opacity = 1;
        },
        leave(el, done) {
            console.log('leave', el)
            let round = 1;
            this.leaveInterval = setInterval(() => {
                el.style.opacity = 1 - round * 0.01;
                round++;
                if (round > 100) {
                    clearInterval(this.leaveInterval);
                    done();
                }
            },20)
        },
        leaveCancelled(el) {
            console.log('leaveCancelled', el)
            clearInterval(this.leaveInterval);
        },
        afterLeave(el) {
            console.log('afterLeave', el)
        },


        
        showUsers() {
            this.usersAreVisible = true;
        },
        hideUsers() {
            this.usersAreVisible = false;
        },
        
        showDialog() {
            this.dialogIsVisible = true;
        },
        hideDialog() {
            this.dialogIsVisible = false;
        },
    },
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

button {
    font: inherit;
    padding: 0.5rem 2rem;
    border: 1px solid #810032;
    border-radius: 30px;
    background-color: #810032;
    color: white;
    cursor: pointer;
}

button:hover,
button:active {
    background-color: #a80b48;
    border-color: #a80b48;
}

.block {
    width: 8rem;
    height: 8rem;
    background-color: #290033;
    margin-bottom: 2rem;
    /*1*/
    /*transition: transform 0.3s ease-out;*/
}

.container {
    max-width: 40rem;
    margin: 2rem auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 2rem;
    border: 2px solid #ccc;
    border-radius: 12px;
}

.animate {
    /*1*/
    /*transform: translateX(-150px);*/
    animation: slide-scale 1s ease-out forwards;
}

@keyframes slide-scale {
    0% {
        transform: translateX(0) scale(1);
    }
    70% {
        transform: translateX(-120px) scale(1.1);
    }
    100% {
        transform: translateX(-150px) scale(1);
    }
}

.v-enter-from {
    opacity: 0;
    transform: translateY(-30px);
}

.v-enter-active {
    transition: all 0.5s ease-out;
}

.v-enter-to {
    opacity: 1;
    transform: translateY(0);
}

.v-leave-from {
    opacity: 1;
    transform: translateY(0);
}

.v-leave-active {
    transition: all 0.5s ease-out;
}

.v-leave-to {
    opacity: 0;
    transform: translateY(-30px);
}

.para2-enter-from {
    opacity: 0;
    transform: translateY(30px);
}

.para2-enter-active {
    transition: all 0.5s ease-out;
}

.para2-enter-to {
    opacity: 1;
    transform: translateY(0);
}

.para2-leave-from {
    opacity: 1;
    transform: translateY(0);
}

.para2-leave-active {
    transition: all 0.5s ease-in;
}

.para2-leave-to {
    opacity: 0;
    transform: translateY(30px);
}

.custom-enter-active {
    animation: slide-fade-in 1s ease-out;
}

.para3-leave-active {
    animation: slide-fade-out 2s ease-in;
}

@keyframes slide-fade-in {
    0% {
        transform: translateY(0) scale(0);
    }
    70% {
        transform: translateY(25px) scale(3);
    }
    100% {
        transform: translateY(0) scale(1);
    }
}

@keyframes slide-fade-out {
    0% {
        transform: translateY(0) scale(1);
    }
    70% {
        transform: translateY(25px) scale(1.5);
    }
    100% {
        transform: translateY(0) scale(0);
    }
}

.fade-button-enter-from, .fade-button-leave-to {
    opacity: 0;
}
.fade-button-enter-active {
    transition: opacity 0.3s ease-out;
}
.fade-button-leave-active {
    transition: opacity 0.3s ease-in;
}
.fade-button-enter-to, .fade-button-leave-from {
    opacity: 1;
}
</style>