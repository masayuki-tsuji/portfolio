<template>
  <header>
    <div class="header-pc">
      <div class="logo-wrapper">
        <NuxtLink to="/" class="icon-link">
          <AtomsRootIcon class="icon" src="/images/logo.jpg" />
        </NuxtLink>
      </div>
      <OrganismsHeaderMenu class="menu" />
      <OrganismsSnsMenu class="sns" />
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header-pc {
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  .logo-wrapper {
    padding: 20px;
    .icon-link {
      &:hover {
        opacity: 1;
      }
    }
  }
  .menu {
    margin-top: 10px;
    margin-bottom: auto;
  }
  .sns {
    margin-top: 10px;
    margin-bottom: 10px;
  }
}
</style>
