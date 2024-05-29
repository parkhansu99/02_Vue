<template>
    <div class="$style.child"><h2>child1</h2></div>
</template>

<script>
export default {
    name: 'child1',
    created() {
        console.log(this.$style);
    },
};
</script>

<style moduled>
.child {
    background-color: orange;
    border: solid 1px black;
    margin: 1.5em;
    padding: 1em;
}
</style>
