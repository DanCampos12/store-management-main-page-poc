<template>
  <div class="home-page--content">
    <v-card class="users-info-card--content">
      <v-card-text>
        <div class="main-aplication-title--label">
          <v-icon
            style="margin-right: 4px"
            size="20"
          >
            mdi-information-outline
          </v-icon>
          Aplicação principal
        </div>
        <div class="description--label">
          Número de usuários cadastrados na aplicação:
        </div>
        <div class="asset-counter--label">
          {{ assetCounter }}
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script lang="rs" src="./UsersInfoComponent.ts"></script>

<style lang="scss" scoped>
  .home-page--content {
    display: flex !important;
    height: 100%;
    width: 100%;
    justify-content: center !important;
  }

  .users-info-card--content {
    width: 100% !important;
    .v-card__text {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .main-aplication-title--label {
        font-size: 14px;
        color: #424242;
        font-weight: 500;
        margin-top: 8px;
        margin-bottom: 8px;
      }

      .description--label {
        font-size: 20px;
        font-weight: 400;
      }

      .asset-counter--label {
        margin-top: 32px;
        font-size: 72px;
        font-weight: 400;
      }
    }
  }
</style>
