<template>
  <div class="home-page--content">
    <v-card class="card--content">
      <v-card-text>
        <img
          alt="Vue logo"
          src="../assets/logo.png"
          width="104"
        >
        <user-list-component />
        <v-footer
          style="background: transparent"
          fixed
          bottom
        >
          <v-spacer />
          <v-btn
            fab
            dense
            small
            @click="addUser"
          >
            <v-icon size="24">
              mdi-plus
            </v-icon>
          </v-btn>
        </v-footer>
      </v-card-text>
    </v-card>
  </div>
</template>

<script lang="ts" src="./Home.ts"></script>

<style lang="scss" scoped>
  .home-page--content {
    display: flex !important;
    height: 100%;
    justify-content: center !important;
  }

  .card--content {
    transform: translate(0);
    max-width: 600px;
    min-width: 400px;
    .v-card__text {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  .v-btn {
    font-family: 'Roboto' !important;
    color: white !important;
    background: #E86C30 !important;
  }
</style>
