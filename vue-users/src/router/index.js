import { createRouter, createWebHistory } from "vue-router";
import AppTop from "@/views/AppTop.vue";

const router = createRouter({
  // Javascript의 history 객체와 vue router 연동
  history: createWebHistory(import.meta.env.BASE_URL),
  // route = 경로를 이용해서 컴포넌트를 실행하는 설정
  routes: [
    {
      path: "/", // 라우트의 경로(필수)
      name: "main", // 라우트의 이름(선택)
      component: AppTop, // 라우트의 컴포넌트(필수)
    },
    {
      path: "/member/list",
      name: "memberList",
      // 동적으로 컴포넌트 호출, 요청하지 않으면 컴포넌트 읽지 않음
      component: () => import("../views/member/MemberList.vue"),
    },
    // params : 경로에 데이터를 포함해서 전달
    // query  : 경로에 데이터를 붙여서 전달(QueryString) 유연하게 사용하는 방식 라우트 지정하지 않아도 됨! 사용할때
    {
      path: "/member/detail/:id", // params 방식
      name: "memberDetail",
      // 동적으로 컴포넌트 호출, 요청하지 않으면 컴포넌트 읽지 않음
      component: () => import("@/views/member/MemberDetail.vue"),
    },
    {
      path: "/member/add",
      name: "memberAdd",
      // 동적으로 컴포넌트 호출, 요청하지 않으면 컴포넌트 읽지 않음
      component: () => import("@/views/member/MemberAdd.vue"),
    },
  ],
});

export default router;
