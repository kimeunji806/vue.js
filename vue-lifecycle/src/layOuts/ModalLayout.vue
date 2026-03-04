<!-- layOuts/ModalLayout.vue -->
<template>
  <div class="container">
    <header>
      <!-- 네임드 슬롯 -->
      <slot name="header"></slot>
      <!-- 폴백 콘텐츠 : 기본 템플릿 -->
      <span style="float: right">X</span>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>
