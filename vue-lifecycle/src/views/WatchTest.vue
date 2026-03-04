<!-- views/WatchTest.vue -->
<script setup>
import { ref, computed, watch } from "vue";
// 금지어
const forbiddenInput = ref("바보, 멍청이");
// 메모
const memoContent = ref("");
// 알림메세지
const message = ref("");
// 비활성화제어
const isBlocked = ref(false);
// 목표 : 본문 내용에 금지어를 사용했는지 확인 후 경고 메세지 출력

// 문자열로 입력된 금지어를 구분 => 배열로 변환 : computed 사용
const forbiddenWords = computed(() => {
  return forbiddenInput.value.split(",");
});

// 본문 내용을 감시 = watch 사용
watch(memoContent, (newVlaue, oldValue) => {
  // 본문 내용이 변경된 경우 진행해야할 프로세스
  // => 금지어가 있는지 없는지
  for (let i = 0; i < forbiddenWords.value.length; i++) {
    let word = forbiddenWords.value[i];
    if (newVlaue.includes(word)) {
      // 금지어가 포함된 경우
      message.value = `경고 : [${word}]는 금지어입니다. 입력이 차단됩니다.`;
      isBlocked.value = true;
    }
  }
});

// 전체 설정 초기화
const resetAll = () => {
  memoContent.value = "";
  message.value = "";
  isBlocked.value = false;
};
</script>
<template>
  <h3>콘텐츠 보안 적용</h3>
  <div>
    <input
      type="text"
      placeholder="금지어를 쉼표로 구분"
      v-model="forbiddenInput"
    />
    <div>
      <textarea
        rows="10"
        cols="50"
        placeholder="내용을 입력하세요."
        v-model="memoContent"
        v-bind.disabled="isBlocked"
      ></textarea>
    </div>
    <p style="color: red; font-weight: bold" v-if="message != ''">
      {{ message }}
    </p>
    <button type="button" v-show="isBlocked" v-on:click="resetAll()">
      시스템 초기화
    </button>
  </div>
</template>
