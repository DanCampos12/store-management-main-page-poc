<template>
  <div class="user-list--content">
    <div class="user-list-title--label">Usuários</div>
    <div class="scroller users--content">
      <div
        class="user-name--label"
        v-for="(user, index) in users"
        :key="index"
      >
        {{ user.name }}
      </div>
    </div>
  </div>
</template>

<script lang="rs" src="./UserListComponent.ts"></script>
<style lang="scss" scoped>
  .user-list--content {
    height: 100%;
    width: 100%;
    text-align: center;

    .user-list-title--label {
      font-family: 'Roboto';
      font-size: 20px;
      color: #424242;
      font-weight: 700;
      margin-top: 8px;
      margin-bottom: 8px;
    }

    .users--content {
      max-height: calc(100vh - 232px);
      .user-name--label {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40px;
        border-bottom: 1px solid #E0E0E0;
        font-family: 'Roboto';
        color: black;
        font-weight: 400;
      }
    }
  }
</style>
