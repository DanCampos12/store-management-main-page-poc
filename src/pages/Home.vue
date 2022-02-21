<template>
  <div class="grid has-2-columns">
    <div class="grid-cell-main--app">
      <users-info-component />
    </div>
    <div class="grid-cell--iframe">
      <div
        v-if="!iFrameLoaded"
        class="loading--iframe"
      >
        Carregando iframe...
      </div>
      <iframe
        :class="{ 'd-none': !iFrameLoaded }"
        src="http://meuportfolio.local/app2"
        width="100%"
        height="440"
        scrolling="no"
        style="border: none;"
        @load="onIframeLoad"
      />
    </div>
  </div>
</template>

<script lang="ts" src="./Home.ts"></script>
<style lang="scss" scoped>
  .grid {
    display: grid;
    height: 100%;
    align-content: center;
    padding: 0 32px 0 32px;

    &.has-2-columns {
      grid-template-columns: repeat(2, 1fr);
      column-gap: 16px;
    }
    .grid-cell--iframe {
      display: flex;
      justify-content: center;

      .loading--iframe {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: white;
        border-radius: 4px;
        color: #424242;
        font-size: 20px;
        font-weight: 400;
        box-shadow: 0 0 0.2em black;
      }
    }
    .grid-cell-main--app {
      display: flex;
      justify-content: center;
      min-height: 440px;
    }
  }

  .d-none {
    display: none;
  }
</style>
