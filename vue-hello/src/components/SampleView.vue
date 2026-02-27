<template>
  <h3>Sample Page</h3>
  <p>이름은 {{ name }}</p>
  <p>카운트는 {{ count }}</p>
  <p>원의 반지름은 {{ data.radius }} 원의 넓이는 {{ area }}</p>
</template>

<script setup>
import { ref, reactive, computed } from "vue"; // ref => 반응형 데이터 생성 함수.

// data 선언.
const name = ref("홍길동"); // 반응형 변수 반영.
const count = ref(0);
// 객체 반응형.
const data = reactive({ PI: 3.14, radius: 3, area: 0 }); // 변경->
// 계산된 속성.
const area = computed(() => {
  return data.PI * data.radius * data.radius;
}); // 계산된 속성.

setInterval(() => {
  count.value += 1;
  data.radius = Math.ceil(Math.random() * 10);
  data.area = ((data.PI * data.r) / adius) * data.radius;
}, 3000);

setTimeout(() => {
  name.value = "기몽지";
}, 3000);
</script>
