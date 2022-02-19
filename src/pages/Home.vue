<template>
  <div class="grid has-2-columns">
    <div class="grid-cell-main--app">
      <users-info-component />
    </div>
    <div class="grid-cell--iframe">
      <iframe
        src="http://localhost:8081/"
        width="100%"
        height="440"
        scrolling="no"
        style="border: none;"
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
    }
    .grid-cell-main--app {
      display: flex;
      justify-content: center;
    }
  }
</style>
