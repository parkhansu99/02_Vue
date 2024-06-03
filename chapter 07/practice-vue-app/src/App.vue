<template>
    <div>
        <ul>
            <componentname
                v-for="키 in 키s"
                :일열="키.일열"
                :이열="키.이열"
                :삼열="키.삼열"
            />
        </ul>
    </div>
</template>
<script>
import componentname from './components/componentname.vue';
export default {
    name: 'App',
    components: { componentname },
    data() {
        return {
            키s: [
                { 일열: 1, 이열: 'BTS', 삼열: true },
                { 일열: 2, 이열: 'BlackPink', 삼열: false },
                { 일열: 3, 이열: 'EXO', 삼열: false },
                { 일열: 4, 이열: 'ITZY', 삼열: false },
            ],
        };
    },
};
</script>
