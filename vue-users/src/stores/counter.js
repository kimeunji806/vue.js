import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", () => {
  // 해당 저장소가 가지는 state, getters, actions 를 정의
  // 1. state : ref 함수를 사용
  const count = ref(0);
  // 2. getters : computed 함수를 사용
  const doubleCount = computed(() => count.value * 2);
  // 3. actions : 일반 함수로 정의
  function increment() {
    count.value++;
  }
  // return 안에 정의된 항목이 외부에 노출되는 항목
  return { count, doubleCount, increment };
});
