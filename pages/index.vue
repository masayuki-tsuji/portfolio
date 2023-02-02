<script setup lang="ts">
useHead({ title: "About" })
</script>

<template>
  <TemplatesPortfolio title="About" icon="person">
    <div class="s-about">
      <div class="profile">
        <div class="name-group">
          <div class="title">CTO/Web Engineer</div>
          <span class="name">Masayuki Tsuji</span>
        </div>
        <AtomsUserIcon class="image" src="/images/profile_main.jpg" />
        <OrganismsSnsMenu class="sns is-mobile" />
      </div>
      <div class="overview">
        <p>
          Webシステム構築〜開発、チームビルディング、事業相談をメインで活動中
        </p>
        <p>
          創業メンバーとしてユーザーヒアリング、MVP検証、UX、業務フロー可視化、情報整理を担当<br />
          単独でプロダクト開発より共に事業を成長させることが強み
        </p>
        <p>
          技術スタックはAWS / Nuxt.js / TypeScript / Ruby(Rails) /
          Python(FastAPI) / Docker
        </p>
        <p></p>
      </div>
      <div class="overview2">
        <p>
          仕事の相談は<nuxt-link to="/contact" class="link">こちら</nuxt-link
          >でお問い合わせ下さい
        </p>
      </div>
    </div>
  </TemplatesPortfolio>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/variables';
.s-about {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  .profile {
    display: flex;
    flex-direction: row;
    .name-group {
      display: flex;
      flex-direction: column;
      align-self: center;
      .title {
        font-size: 22px;
      }
    }
    .name {
      font-size: 36px;
    }
    .image {
      margin-left: 30px;
    }
  }
  .overview {
    max-width: 70%;
  }
  .overview2 {
    .link {
      text-decoration: underline;
    }
  }
}
@media (max-width: $break-point-sp) {
  .s-about {
    margin-top: 0;
    .profile {
      flex-direction: column;
      align-items: center;
      .name-group {
        order: 2;
        .title {
          text-align: center;
        }
      }
      .image {
        order: 1;
        margin-left: 0;
        margin-bottom: 10px;
      }
      .sns {
        order: 3;
        margin-top: 10px;
      }
    }
    .overview {
      max-width: 90%;
      margin-top: 20px;
      text-align: center;
    }
  }
}
</style>
