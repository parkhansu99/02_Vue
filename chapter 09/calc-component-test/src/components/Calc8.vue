<template>
  <div>
    X : <input type="text" v-model.number="state.x" /><br />
    <div>결과 : {{ result }}</div>
  </div>
</template>

<script>
import { ref, watchEffect } from 'vue';
export default {
  name: 'Calc6',
  setup() {
    const x = ref(10);
    const y = ref(20);

    watchEffect(() => {
      result.value = x.value + y.value;
    });

    return { x, y, result };
  },
};
</script>
