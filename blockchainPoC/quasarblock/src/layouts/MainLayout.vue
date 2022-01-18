<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="frosted-glass" elevated>
      <q-toolbar>
        <q-toolbar-title> Cryptocurrencies </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer class="frosted-glass">
      <q-toolbar>
        <q-toolbar-title>
          <div class="flex flex-center">Crypto App - The Diligent Dev</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "MainLayout",
});
</script>

<style scoped>
.frosted-glass {
  backdrop-filter: blur(7px);
  background-color: #0000001a;
  color: black;
}
</style>
