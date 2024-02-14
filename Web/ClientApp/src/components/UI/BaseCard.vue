<template>
    <div>
        <header v-if="$slots.header">
            <slot name="header">
                <h2>Default Header</h2>
            </slot>
        </header>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "BaseCard",
    mounted() {
        //console.log(this.$slots);
        //console.log(this.$slots.header);
        //console.log(this.$slots.default);
    }
}
</script>

<style scoped>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
}
header h2 {
    margin: auto;
}
div {
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 1rem;
    margin: 2rem auto;
    max-width: 40rem;
}

/*.card {*/
/*    border-radius: 12px;*/
/*    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);*/
/*    padding: 1rem;*/
/*    margin: 2rem auto;*/
/*    max-width: 40rem;*/
/*}*/
</style>