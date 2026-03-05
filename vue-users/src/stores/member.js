import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useMemberStore = defineStore(
  "member",
  () => {
    // state
    // 전체 회원
    const members = ref([]);
    // 회원 정보
    const member = ref({});

    // getters
    // 전체 회원 수
    const count = computed(() => {
      return members.value.length;
    });

    // actions
    // 서버에서 전체 회원 정보 가져오기
    // const server = "https://jsonplaceholder.typicode.com";
    const fineMemberList = async () => {
      let list = await fetch(`/fallback/users`)
        .then((res) => res.json())
        .catch((err) => console.log(err));

      members.value = list;
      // counterStore.count = members.value.length;
    };

    // 서버에서 지정한 회원의 상세정보 가져오기
    // const server = "https://jsonplaceholder.typicode.com";
    const fineMemberById = async (id) => {
      let info = await fetch(`/fallback/users/${id}`)
        .then((res) => res.json())
        .catch((err) => console.log(err));

      member.value = info;
    };

    // 서버에 회원 정보 등록하기
    const createMember = async (memberInfo) => {
      let info = await fetch(`/fallback/users`, {
        method: "POST",
        body: JSON.stringify(memberInfo),
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .catch((err) => console.log(err));

      return info.id;
    };
    return {
      members,
      member,
      count,
      fineMemberList,
      fineMemberById,
      createMember,
    };
  },
  {
    persist: true, // 상태 자동 저장 활성화
  },
);
