<template>
  <div class="app">
    <div class="main-aplication-title--label">
      <v-icon
        style="margin-right: 4px; color: white"
        size="32"
      >
        mdi-information-outline
      </v-icon>
      Aplicação principal
    </div>
    <router-view />
  </div>
</template>

<script lang="ts" src="./AppComponent.ts"></script>
<style lang="scss" src="./AppComponent.scss"></style>
