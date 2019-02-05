<template lang="pug">
    .logo
        nuxt-link.logo__link(to="/")
            img.logo__img(src="/img/logo.png" alt="Dinoshop")
</template>

<script>
export default {};
</script>

<style lang="scss">
.logo {
    @media screen and (max-width: 767px) {
        max-width: 96px;
    }
}
</style>
