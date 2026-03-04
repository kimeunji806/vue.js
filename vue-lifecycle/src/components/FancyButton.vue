<!-- components/FancyButton.vue -->
<template>
  <button class="fancy-btn">
    <slot></slot>
    <!-- 부모가 전달할 슬롯 컨텐츠를 지정-->
  </button>
</template>
<style>
.fancy-btn {
  color: #fff;
  background: linear-gradient(315deg, #42d392 25%, #647eff);
  border: none;
  padding: 5px 10px;
  margin: 5px;
  border-radius: 8px;
  cursor: pointer;
}
</style>
