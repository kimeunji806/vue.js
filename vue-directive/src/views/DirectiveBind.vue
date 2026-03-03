<!-- src/views/DirectiveBind.vue -->
<script setup>
// composition API
import { ref, reactive, computed } from "vue";
const info = ref("<strong>https://vuejs.org</strong>");
const url = ref("https://vuejs.org");
const isDisabled = ref(true);
const imgAttributes = reactive({
  // 필드명 => 속성이름
  src: "./src/assets/logo.svg",
  alt: "vue 기본 로고",
  width: "150px",
});

// style 속성 : css 기반 적용하는 항목도 값도 이미 정해져 있음.
const txtColor = ref("pink");
const backColor = ref("green");
const styleAttributes = reactive({
  color: "pink",
  backgroundColor: "green", // background-color
});

// class 속성
const msg = ref("Hello, World!");
const classInfo = ref("txtColorRed txtSize24");
const isTxtColorRed = ref(true);
const isBgColorBlue = ref(true);
const classStyles = reactive({
  txtColorRed: true,
  bgColorBlue: false,
  txtSize24: true,
});
</script>
<template>
  <h2>특정 속성의 경우</h2>
  <p v-html="info"></p>
  <p v-text="info"></p>
  <p>vuejs 공식 사이트 : {{ info }}</p>
  <hr />
  <h2>일반속성</h2>
  <p><a href="https://vuejs.org">Vue.js 사이트</a></p>
  <p>
    <a
      v-bind:href="url"
      v-bind:style="{ color: txtColor, backgroundColor: backColor }"
      >vue.js 사이트</a
    >
  </p>
  <p>
    <a
      v-bind:href="url + '/guide/introdution.html'"
      v-bind:style="styleAttributes"
      >vue.js 사이트</a
    >
  </p>
  <p><button v-bind:disabled="isDisabled">동의합니다</button></p>
  <p><img alt="vue 로고" v-bind="imgAttributes" /></p>
  <hr />
  <h3>Class 속성</h3>
  <p v-bind:class="classInfo">{{ msg }}</p>
  <p v-bind:class="{ txtColorRed: isTxtColorRed, bgColorBlue: isBgColorBlue }">
    {{ msg }}
  </p>
  <p v-bind:class="classStyles">{{ msg }}</p>
</template>
<style scoped>
.txtColorRed {
  color: red;
}
.txt-color-pink {
  color: pink;
}
.bgColorBlue {
  background-color: blue;
}
.txtSize24 {
  font-size: 24px;
}
</style>
