<!-- views/DirectiveFor.vue -->
<script setup>
import { ref } from "vue";
const aray = ["마우스", "키보드", "USB", "마우스패드"];
const itemList = ref(aray);

// Data : 객체 배열일 경우
const friends = ref([
  { id: "01", name: "안유진", age: 22 },
  { id: "02", name: "이영지", age: 23 },
]);
const name = ref("");
const age = ref(0);
const add = () => {
  let obj = {
    id: friends.value[friends.value.length - 1].id + 1,
    name: name.value,
    age: age.value,
  };
  friends.value.push(obj);
  name.value = "";
  age.value = "";
};
</script>
<template>
  <h2>전자기기 목록</h2>
  <ul>
    <li v-for="item in itemList">{{ item }}</li>
  </ul>
  <form>
    <label>이름: <input type="text" v-model="name" /></label>
    <label>나이: <input type="text" v-model="age" /></label>
    <button type="button" v-on:click="add()">친구 추가</button>
  </form>
  <h2>친구 목록</h2>
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>이름</th>
        <th>나이</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="info in friends" v-bind:key="info.id">
        <!-- info : { id: "01", name: "안유진", age: 22 } -->
        <td>{{ info.id }}</td>
        <td>{{ info.name }}</td>
        <td>{{ info.age }}</td>
      </tr>
    </tbody>
  </table>
</template>
