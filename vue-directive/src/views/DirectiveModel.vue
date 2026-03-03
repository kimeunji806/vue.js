<!-- views/DirectiveModel.vue -->
<script setup>
import { ref } from "vue";
const inputNameModel = ref("양방향");
const num = ref(0);
const rCount = ref(5);
const textAreaInput = ref("입력하세요");
const memberType = ref("우수");
// checkbox
const isSelected = ref(null);
const gender = ref(null);
const selectOS = ref(["1", "3"]);
// radio
const choiceOS = ref(1);
</script>
<template>
  <h3>input 태그의 type 속성</h3>
  <input type="text" v-model.lazy="inputNameModel" />
  <p>{{ inputNameModel + 1000 }}</p>
  <input type="number" v-model="num" />
  <p>{{ num + 1000 }}</p>
  <h3>textarea 태그</h3>
  <textarea v-bind:rows="rCount" v-model="textAreaInput"></textarea>
  <p v-html="textAreaInput.replace(/\n/g, `<br>`)"></p>
  <h3>select 태그</h3>
  <select v-model="memberType">
    <option value="일반">일반회원</option>
    <option value="우수">우수회원</option>
    <option value="특별">특별회원</option>
  </select>
  <p>{{ memberType }}</p>
  <hr />
  <h2>checkbox 1개</h2>
  <label>
    <input type="checkbox" v-model="isSelected" value="A" />
    동의합니다.
  </label>
  <p>{{ isSelected }}</p>
  <label>
    <input
      type="checkbox"
      v-model="gender"
      true-value="여"
      false-value="남"
    />성별</label
  >
  <p>{{ gender }}</p>
  <hr />
  <h2>checkbox n개</h2>
  <label><input type="checkbox" v-model="selectOS" value="1" />macOS</label>
  <label><input type="checkbox" v-model="selectOS" value="2" />Windows</label>
  <label><input type="checkbox" v-model="selectOS" value="3" />Linux</label>
  <p>{{ selectOS }}</p>
  <h2>radio n개</h2>
  <label><input type="radio" v-model="choiceOS" value="1" />macOS</label>
  <label><input type="radio" v-model="choiceOS" value="2" />Windows</label>
  <label><input type="radio" v-model="choiceOS" value="3" />Linux</label>
  <p>{{ choiceOS }}</p>
</template>
