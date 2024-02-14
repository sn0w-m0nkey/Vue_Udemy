<template>
    <span class="badge" :class="classes">{{ upperText }}</span>
</template>

<script>
export default {
    props: ['type', 'text'],
    computed: {
        upperText() {
            return this.text.toUpperCase();  
        },
        classes() {
            return {
                'badge--admin': this.type === 'admin',
                'badge--author': this.type === 'author',
                'frontend': this.type === 'frontend',
                'backend': this.type === 'backend',
                'career': this.type === 'career',
            };
        },
    },
};
</script>

<style scoped>
.badge {
    background-color: #ccc;
    color: #252525;
    border-radius: 30px;
    padding: 0.5rem 1.5rem;
    display: inline-block;
    margin-right: 0.5rem;
}

.badge--admin {
    background-color: #810036;
    color: white;
}

.badge--author {
    background-color: #002c8a;
    color: white;
}

.frontend {
    background-color: #3d008d;
    color: white;
}

.backend {
    background-color: #71008d;
    color: white;
}

.career {
    background-color: #8d006e;
    color: white;
}
</style>