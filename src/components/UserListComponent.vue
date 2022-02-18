<template>
  <div>
    <div>Lista de Usuários:</div>
    <div
      class="user-name--label"
      v-for="(user, index) in users"
      :key="index"
    >
      {{ user.name }}
    </div>
  </div>
</template>

<script lang="rs" src="./UserListComponent.ts"></script>
<style lang="css" scoped>
  .user-name--label {
    color: blue;
    font-weight: 900;
  }
</style>
