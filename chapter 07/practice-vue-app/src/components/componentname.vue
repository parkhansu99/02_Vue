<template>
    <li><input type="checkbox" v-bind:checked="삼열" />{{ 이열 }}</li>
</template>
<script>
export default {
    name: 'componentname',
    props: {
        일열: [Number, String],
        이열: {
            함수(매개변수) {
                return typeof 매개변수 !== 'string'
                    ? false
                    : 매개변수.trim().length >= 4
                    ? true
                    : false;
            },
        },
        삼열: {
            type: Boolean,
            required: false,
            default: false,
        },
    },
};
</script>
