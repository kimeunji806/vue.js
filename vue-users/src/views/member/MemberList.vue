<!-- views/member/MemberList.vue -->
<script setup>
import { RouterLink, useRouter } from "vue-router";
const router = useRouter(); // Router 객체를 반환
const goToDetail = (memberId) => {
  // 호출하고자 하는 Route 정보를 전달
  router.push({
    name: "memberDetail",
    params: { id: memberId },
    // query:{keyword:Hello}
  });
};

import { useCounterStore } from "@/stores/counter";
const counterStore = useCounterStore();

import { ref, onBeforeMount } from "vue";

import { useMemberStore } from "@/stores/member";
import { storeToRefs } from "pinia";
const memberStore = useMemberStore();

const { members } = storeToRefs(memberStore);
const { fineMemberList } = memberStore;

// Lifecycle Hook은 마지막에 작성
// onBeforeMount : Lifecycle Hook 중 가장 먼저 실행
onBeforeMount(() => {
  // 서버에 초기데이터 요청
  fineMemberList();
});
</script>
<template>
  <h1>회원 관리</h1>
  <p><RouterLink v-bind:to="{ name: 'main' }">Top</RouterLink> > 회원 리스트</p>
  <h3>회원 리스트</h3>
  <p>
    신규등록은 <RouterLink :to="{ path: '/member/add' }">여기</RouterLink>를
    클릭
  </p>
  <ul>
    <li v-for="info in members" v-on:click="goToDetail(info.id)">
      ID가 {{ info.id }}인 {{ info.name }}님
    </li>
  </ul>
</template>
