<!-- 85Page -->
<script setup lang="ts">
import { ref } from "vue";

const url = ref("http://vuejs.org/");
</script>

<template>
  <p><a v-bind:href="url" target="_blank">Vue.js 사이트</a></p>
  <p><a :href="url" target="_blank">Vue.js 사이트(약어)</a></p>
  <p><a v-bind:href="url + 'guide/introduction.html'" target="_blank">Vue.js 가이드 페이지</a></p>
</template>
