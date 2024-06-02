<template>
  <div>
    X : <input type="text" v-model.number="state.x" /><br />
    <div>결과 : {{ state.result }}</div>
  </div>
</template>

<script>
import { reactive, watch } from 'vue';
export default {
  name: 'Calc6',
  setup() {
    const state = reactive({ x: 0, result: 0 });

    watch(
      () => state.x,
      (current, old) => {
        console.log(`${old} → ${current}`);
        state.result = current * 2;
      }
    );

    return { state };
  },
};
</script>
