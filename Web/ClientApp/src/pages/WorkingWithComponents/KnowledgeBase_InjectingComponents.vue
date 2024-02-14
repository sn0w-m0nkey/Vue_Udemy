<template>
    <div>
        <active-element
            :topic-title="activeTopic && activeTopic.title"
            :text="activeTopic && activeTopic.fullText"
        ></active-element>
        <knowledge-base></knowledge-base>
    </div>
</template>

<script>
import ActiveElement from "@/components/WorkingWithComponents/KnowledgeBase2/ActiveElement";
import KnowledgeBase from "@/components/WorkingWithComponents/KnowledgeBase2/KnowledgeBase";

export default {
    name: "KnowledgeBase_InjectingComponents",
    components: {ActiveElement, KnowledgeBase},
    data() {
        return {
            topics: [
                {
                    id: 'basics',
                    title: 'The Basics',
                    description: 'Core Vue basics you have to know',
                    fullText:
                        'Vue is a great framework and it has a couple of key concepts: Data binding, events, components and reactivity - that should tell you something!',
                },
                {
                    id: 'components',
                    title: 'Components',
                    description:
                        'Components are a core concept for building Vue UIs and apps',
                    fullText:
                        'With components, you can split logic (and markup) into separate building blocks and then combine those building blocks (and re-use them) to build powerful user interfaces.',
                },
            ],
            activeTopic: null,
        };
    },
    provide() {
        return {
            topics: this.topics,
            selectTopic: this.activateTopic
        }
    },
    methods: {
        activateTopic(topicId) {
            this.activeTopic = this.topics.find((topic) => topic.id === topicId);
        },
    },
    mounted() {
        setTimeout(() => {
            this.topics.push({
                id: 'events',
                title: 'Events',
                description: 'Events are important in Vue',
                fullText: 'Events allow you to trigger code on demand'
            })
        }, 3000);
    }
}
</script>

<style scoped>
/deep/ * {
    box-sizing: border-box;
}
/deep/ html {
    font-family: sans-serif;
}
/deep/ body {
    margin: 0;
}
/deep/ section {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    margin: 2rem auto;
    max-width: 40rem;
    padding: 1rem;
    border-radius: 12px;
}

/deep/ ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
}

/deep/ li {
    border-radius: 12px;
    border: 1px solid #ccc;
    padding: 1rem;
    width: 15rem;
    margin: 0 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

/deep/ h2 {
    margin: 0.75rem 0;
    text-align: center;
}

/deep/ button {
    font: inherit;
    border: 1px solid #c70053;
    background-color: #c70053;
    color: white;
    padding: 0.75rem 2rem;
    border-radius: 30px;
    cursor: pointer;
}

/deep/ button:hover,
/deep/ button:active {
    background-color: #e24d8b;
    border-color: #e24d8b;
}
</style>