<template>
  <div class="app-logo">
    <ClientOnly>
      <div class="app-logo-icon" />
    </ClientOnly>
  </div>
</template>

<style>
.app-logo {
  height: 30px;
  width: 30px;
}
.app-logo-icon {
  width: 100%;
  height: 100%;
  background: url('images/logo.png') repeat 0 0;
  background-size: cover;
}
</style>
