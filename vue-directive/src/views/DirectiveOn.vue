<!-- views/DirectiveOn.vue -->
<script setup>
import { ref } from "vue";
const randValue = ref(0);
const onClickFunc = () => {
  randValue.value = parseInt(Math.random() * 100);
};

const selectTag = (selectedTag) => {
  alert(`Tag : ${selectedTag}`);
};
</script>
<template>
  <h3>On 디렉티브 기본</h3>
  <button
    type="button"
    v-on:click="onClickFunc()"
    v-on:mouseover="randValue = '멀티이벤트'"
  >
    클릭
  </button>
  <p>결과 : {{ randValue }}</p>
  <hr />
  <h3>On 디렉티브 수식어</h3>
  <div v-on:click="selectTag('div')">
    div
    <form v-on:click.self.stop="selectTag('form')">
      form
      <a
        href="https://www.naver.com"
        style="display: block"
        v-on:click.prevent="selectTag('a')"
        >a 태그
        <p v-on:click.once="selectTag('p')">네이버</p>
      </a>
    </form>
  </div>
  <hr />
  <h3>key 이벤트</h3>
  <input v-on:keyup.ctrl.enter="selectTag('input')" />
</template>
<style scoped>
div,
div * {
  border: 1px solid burlywood;
}
</style>
