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

<style lang="scss" src="./AppComponent.scss"></style>
