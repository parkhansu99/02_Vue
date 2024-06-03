<template>
    <li><input type="checkbox" v-bind:checked="키.삼열" />{{ 키.이열 }}</li>
</template>
<script>
export default {
    name: 'componentname2',
    props: ['키'],
};
</script>
