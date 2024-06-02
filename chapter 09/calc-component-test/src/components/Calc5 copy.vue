<template>
  <div>
    X : <input type="text" v-model.number="x" /><br />
    <div>결과 : {{ result }}</div>
  </div>
</template>

<script>
import { ref, watch } from 'vue';
export default {
  name: 'Calc5',
  setup() {
    const x = ref(0);
    const result = ref(0);

    watch(x, () => {
      console.log(`${old} → ${current}`);
      result.value = x * 2;
    });

    return { x, result };
  },
};
</script>
