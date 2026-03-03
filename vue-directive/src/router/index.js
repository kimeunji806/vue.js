import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  // history 객체와 연동여부
  history: createWebHistory(import.meta.env.BASE_URL),
  // vue-router가 사용하는 route(endpoint + service + view or data)정보
  routes: [
    {
      path: "/", // 라우트경로(필수)
      name: "home", // 라우트이름(선택이지만 사용권장)
      component: HomeView, // 라우트를 통해서 불러낼 컴포넌트
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // 동적 컴포넌트 호출 : 메인페이지 제외
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/bind",
      name: "directivebind",
      // 동적 컴포넌트 호출 : 메인페이지 제외
      component: () => import("../views/DirectiveBind.vue"),
    },
    {
      path: "/model",
      name: "directiveModel",
      // 동적 컴포넌트 호출 : 메인페이지 제외
      component: () => import("../views/DirectiveModel.vue"),
    },
    {
      path: "/on",
      name: "directiveOn",
      // 동적 컴포넌트 호출 : 메인페이지 제외
      component: () => import("../views/DirectiveOn.vue"),
    },
    {
      path: "/if",
      name: "directiveIf",
      // 동적 컴포넌트 호출 : 메인페이지 제외
      component: () => import("../views/DirectiveIf.vue"),
    },
    {
      path: "/for",
      name: "directiveFor",
      // 동적 컴포넌트 호출 : 메인페이지 제외
      component: () => import("../views/DirectiveFor.vue"),
    },
    {
      path: "/todolist",
      name: "ToDoDirective",
      // 동적 컴포넌트 호출 : 메인페이지 제외
      component: () => import("../views/ToDoDirective.vue"),
    },
  ],
});

export default router;
