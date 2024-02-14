<template>
    <header>
        <h1>Vue Dynamic Styling</h1>
    </header>
    <section id="styling">
        <div class="demo" 
            :style="{borderColor: boxASelected ? 'red' : '#ccc'}" 
            @click="boxSelected('A')"></div>
        <div 
            :class="boxBSelected ? 'demo active' : 'demo'"
            @click="boxSelected('B')"></div>
        <div
            :class="{demo: true, active: boxCSelected}" 
            @click="boxSelected('C')"></div>
        <div
            class="demo"
            :class="{active: boxDSelected}"
            @click="boxSelected('D')"></div>
        <div
            class="demo"
            :class="boxEClasses"
            @click="boxSelected('E')"></div>
        <div
            :class="['demo', {active: boxFSelected}]"
            @click="boxSelected('F')"></div>
    </section>
</template>

<script>
export default {
    name: "DynamicStyling",
    data() {
        return {
            boxASelected: false,
            boxBSelected: false,
            boxCSelected: false,
            boxDSelected: false,
            boxESelected: false,
            boxFSelected: false,
        }
    },
    computed: {
        boxEClasses() {
            return { active: this.boxESelected}
        }
    },
    methods: {
        boxSelected(box) {
            console.log(box);
            if (box === 'A') {
                this.boxASelected = !this.boxASelected;
            } else if (box ==='B') {
                this.boxBSelected = !this.boxBSelected;
            } else if (box ==='C') {
                this.boxCSelected = !this.boxCSelected;
            } else if (box ==='D') {
                this.boxDSelected = !this.boxDSelected;
            } else if (box ==='E') {
                this.boxESelected = !this.boxESelected;
            } else if (box ==='F') {
                this.boxFSelected = !this.boxFSelected;
            }
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
        margin: 3rem;
        border-radius: 10px;
        padding: 1rem;
        background-color: #4fc08d;
        color: white;
        text-align: center;
    }
    
    #styling {
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
        margin: 3rem;
        border-radius: 10px;
        padding: 1rem;
        text-align: center;
    }
    
    .demo {
        width: calc(100% - 32px);
        height: 100px;
        margin: 16px;
        border: 2px dashed #ccc;
    }
    
    .active {
        border-color: red;
        background-color: salmon;
    }
</style>