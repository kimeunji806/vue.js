<!-- 화면에 실제로 보여질 html 작성하는곳 -->
<template>
  <p>
    <!-- 머스태시 구문 -->
    <b>{{ title }}</b>
    <!-- 디렉티브(지시자) -->
    <span v-text="content"></span>
  </p>
</template>

<script setup>
// 자바스크립트 작성하는 부분/vue에서 사용하는 간단한 컴포넌트 작성.
defineProps({
  // 부모 컴포넌트로부터 데이터 받겠다고 선언하는 함수.
  title: {
    type: String,
  },
  content: {
    type: String,
  },
});
</script>
