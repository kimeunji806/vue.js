<!-- views/TodoList.vue -->
<template>
  <div id="myDIV" class="header">
    <h2>My To Do List</h2>
    <input type="text" id="myInput" v-model="task" placeholder="Title..." />
    <span type="button" v-on:click="add()" class="addBtn">Add</span>
  </div>

  <ul id="myUL">
    <!-- <li /> 태그 원래 위치 -->
    <TaskInfo
      v-for="info in todos"
      v-bind:todo="info"
      v-on:taskChecked="todoCompelete"
      v-on:delTask="delTodo"
    />
  </ul>
</template>

<script setup>
import TaskInfo from "@/components/TaskInfo.vue";
import { ref, reactive } from "vue";
const todos = reactive([
  { no: 1, task: "Hit the gym", compelete: false },
  { no: 2, task: "Pay bills", compelete: true },
  { no: 3, task: "Meet George", compelete: false },
  { no: 4, task: "Buy eggs", compelete: false },
  { no: 5, task: "Read a book", compelete: false },
  { no: 6, task: "Organize office", compelete: false },
]);

// todo 완료여부 처리 => li 태그의 class 속성 값 제어
const todoCompelete = (selectedNO) => {
  todos.forEach((todo) => {
    if (todo.no == selectedNO) todo.compelete = !todo.compelete;
  });
};

// todo 삭제 함수 => 배열의 데이터를 삭제
const delTodo = (selectedNo) => {
  // 특정 조건을 만족하는 데이터의 인덱스 반환
  let delIdx = todos.findIndex((todo) => todo.no == selectedNo);
  todos.splice(delIdx, 1);
};

// <input>에 사용하는 함수
const task = ref("");
// <span> 태그에 연결된 이벤트 핸들러
const add = () => {
  // 공백 제거
  const value = task.value.trim();
  if (!value) return;

  let obj = {
    no: todos[todos.length - 1].no + 1,
    task: task.value,
    complete: false,
  };
  todos.push(obj);
  // input 태그 초기화
  task.value = "";
};
</script>

<style>
/* Include the padding and border in an element's total width and height */
* {
  box-sizing: border-box;
}

/* Remove margins and padding from the list */
ul {
  margin: 0;
  padding: 0;
}

/* Style the list items */
ul li {
  cursor: pointer;
  position: relative;
  padding: 12px 8px 12px 40px;
  background: #eee;
  font-size: 18px;
  transition: 0.2s;

  /* make the list items unselectable */
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Set all odd list items to a different color (zebra-stripes) */
ul li:nth-child(odd) {
  background: #f9f9f9;
}

/* Darker background-color on hover */
ul li:hover {
  background: #ddd;
}

/* When clicked on, add a background color and strike out text */
ul li.checked {
  background: #888;
  color: #fff;
  text-decoration: line-through;
}

/* Add a "checked" mark when clicked on */
ul li.checked::before {
  content: "";
  position: absolute;
  border-color: #fff;
  border-style: solid;
  border-width: 0 2px 2px 0;
  top: 10px;
  left: 16px;
  transform: rotate(45deg);
  height: 15px;
  width: 7px;
}

/* Style the close button */
.close {
  position: absolute;
  right: 0;
  top: 0;
  padding: 12px 16px 12px 16px;
}

.close:hover {
  background-color: #f44336;
  color: white;
}

/* Style the header */
.header {
  background-color: #f44336;
  padding: 30px 40px;
  color: white;
  text-align: center;
}

/* Clear floats after the header */
.header:after {
  content: "";
  display: table;
  clear: both;
}

/* Style the input */
input {
  margin: 0;
  border: none;
  border-radius: 0;
  width: 75%;
  padding: 10px;
  float: left;
  font-size: 16px;
}

/* Style the "Add" button */
.addBtn {
  padding: 10px;
  width: 25%;
  background: #d9d9d9;
  color: #555;
  float: left;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;
  border-radius: 0;
}

.addBtn:hover {
  background-color: #bbb;
}
</style>
