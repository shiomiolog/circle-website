<!-- app.vue -->
<template>
  <!-- bg-white を bg-slate-50 に変更。選択色(selection)を shiomi-blue に変更 -->
  <div
    class="min-h-screen flex flex-col bg-slate-50 text-[#333] font-sans selection:bg-shiomi-blue selection:text-white">
    <NuxtRouteAnnouncer />

    <AppHeader />

    <main class="flex-1">
      <NuxtPage />
    </main>

    <AppFooter />
  </div>
</template>