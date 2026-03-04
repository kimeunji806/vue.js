<!-- views/TaskInfo.vue -->
<script setup>
import { defineProps, defineEmits } from "vue";
// 부모로부터 전달받는 props 정의
// props : todo { no: 1, task: "Hit the gym", compelete: false }
const props = defineProps(["todo"]);

// 부모에게 이벤트를 전달하기 위한 emit 정의
// emit : checked 변경, 삭제요청
const emit = defineEmits(["taskChecked", "delTask"]);

// 체크 상태 변경 요청 함수
const todoCompelete = () => {
  emit("taskChecked", props.todo.no);
};
// 삭제 요청 함수
const delTodo = () => {
  emit("delTask", props.todo.no);
};
</script>
<template>
  <li
    v-bind:class="{ checked: todo.compelete }"
    v-on:click.self="todoCompelete"
  >
    {{ todo.task }}
    <span class="close" v-on:click="delTodo">X</span>
  </li>
</template>
