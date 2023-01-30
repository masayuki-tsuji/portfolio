<template>
  <header>
    <div class="header-sp">
      <input id="nav" type="checkbox" style="display: none" />
      <label class="bars-wrapper" for="nav">
        <v-icon icon="bars" />
      </label>
      <span class="title">Masayuki Tsuji's Portfolio</span>
      <label id="nav-close" for="nav"></label>
      <div id="content">
        <div class="content-wrapper">
          <label class="nav-close-icon" for="nav">
            <v-icon icon="times" />
          </label>
          <div class="logo-wrapper">
            <NuxtLink to="/" class="icon-link">
              <AtomsRootIcon class="icon" src="/images/logo.jpg" />
            </NuxtLink>
          </div>
          <OrganismsHeaderMenu class="menu" />
          <OrganismsSnsMenu class="sns" />
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/variables';
.header-sp {
  display: flex;
  height: 100%;
  align-items: center;
  .bars-wrapper {
    font-size: 18px;
    margin-right: auto;
    margin-left: 15px;
  }
  .title {
    font-size: 18px;
    text-align: center;
    margin-right: auto;
  }
  #content {
    width: 80%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: white;
    border: 1px solid $color-grey;
    transform: translateX(-105%);
    transition: 0.3s ease-in-out;
    z-index: 100;
    .content-wrapper {
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      .nav-close-icon {
        display: inline;
        font-size: 24px;
        margin-top: 5px;
        margin-right: 20px;
        margin-left: auto;
      }
      .logo-wrapper {
        padding: 0 50px;
      }
      .menu {
        margin-top: 10px;
        margin-bottom: auto;
      }
      .sns {
        margin-bottom: 10px;
      }
    }
  }
  #nav-close {
    display: none;
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    overflow: none;
    background-color: rgba(0, 0, 0, 0.65);
    z-index: 99;
  }
  #nav:checked ~ #content {
    display: block;
    transform: translateX(0%);
  }
  #nav:checked ~ #nav-close {
    display: block;
  }
}
</style>
