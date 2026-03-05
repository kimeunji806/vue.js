<!-- views/member/MemberDetail.vue -->
<script setup>
// Route -> 호출 당한 정보(Request 객체 역할)
// Router -> 호출
import { useRoute } from "vue-router";
const route = useRoute(); // 호출 당한 정보
// { name: "memberDetail", params: { id : memberId } },
const memId = route.params.id;
console.log(memId);

import { ref, onBeforeMount } from "vue";

import { useMemberStore } from "@/stores/member";
import { storeToRefs } from "pinia";
const memberStore = useMemberStore();

const { member } = storeToRefs(memberStore);
const { fineMemberById } = memberStore;

onBeforeMount(() => {
  fineMemberById(memId);
});
</script>
<template>
  <h1>회원 관리</h1>
  <p>
    <RouterLink :to="{ name: 'main' }">Top</RouterLink> >
    <RouterLink :to="{ path: '/member/list' }">회원 리스트</RouterLink>
    > 회원 상세 정보
  </p>
  <h3>회원 상세 정보</h3>
  <div>
    <div><span>ID</span> {{ member.id }}</div>
    <div><span>이름</span> {{ member.name }}</div>
    <div><span>이메일</span> {{ member.email }}</div>
    <div><span>연락처</span> {{ member.phone }}</div>
  </div>
</template>
<style>
span {
  font-weight: bold;
}
</style>
