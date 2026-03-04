<!-- components/ChildLifecycleHook.vue -->
<script setup>
import {
  ref,
  computed,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from "vue";
const heightData = Math.round(Math.random() * 10);
const widthData = Math.round(Math.random() * 10);

const height = ref(heightData);
const width = ref(widthData);
const area = computed(() => {
  return height.value * width.value;
});

const change = () => {
  height.value = Math.round(Math.random() * 10);
  width.value = Math.round(Math.random() * 10);
};

// mount : 화면에 렌더링되는 시점 (Real-DOM에 마운트된 단계)
onBeforeMount(() => {
  console.log(`Child - onBeforeMount : ${height.value} * ${width.value}`);
});
onMounted(() => {
  console.log(`Child - onMounted : ${height.value} * ${width.value}`);
});
// update : 변경사항 감지해서 재렌더링 시작
onBeforeUpdate(() => {
  console.log(`Child - onBeforeUpdate : ${height.value} * ${width.value}`);
});
onUpdated(() => {
  console.log(`Child - onUpdated : ${height.value} * ${width.value}`);
});
// unmount : Real-DOM에서 해제된 상황
onBeforeUnmount(() => {
  console.log(`Child - onBeforeUnmount : ${height.value} * ${width.value}`);
});
onUnmounted(() => {
  console.log(`Child - onUnmounted : ${height.value} * ${width.value}`);
});
</script>
<template>
  <div>
    <h3>자식 컴포넌트</h3>
    <p>세로 {{ height }}, 가로 {{ width }} 인 사각형 면적 {{ area }}</p>
    <button v-on:click="change">값변경</button>
  </div>
</template>
<style scoped>
div {
  border: 2px solid skyblue;
}
</style>
