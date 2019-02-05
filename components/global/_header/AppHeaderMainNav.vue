<template lang="pug">
   .main-nav
        ul.main-nav__list
            li.main-nav__item(
                v-for="( link, index ) in links" 
                :key="index" 
                :style="{ 'max-width': (100 / links.length) + '%', 'flex': '0 0 ' + (100 / links.length) + '%'}")
                nuxt-link.main-nav__link(:to="link.to" exact) {{link.title}}
</template>

<script>
export default {
    computed: {
        links() {
            return this.$store.state.header.navLinks;
        }
    }
};
</script>

<style lang="scss">
@import "~assets/scss/vars";

.main-nav {
    &__list {
        display: flex;
    }
    &__link {
        display: block;
        color: #4d4d4d;
        width: 100%;
        height: 50px;
        line-height: 50px;
        text-align: center;
        text-transform: uppercase;
        font-size: 12px;
        font-weight: 500;
        position: relative;
        transition: 0.25s ease;
        &:after {
            content: "";
            width: 100%;
            height: 3px;
            background: $color-main;
            position: absolute;
            left: 0;
            bottom: 0;
            transition: 0.15s ease;
            -webkit-transform-origin: center;
            transform-origin: center;
            -webkit-transform: scaleX(0);
            transform: scaleX(0);
        }
        &.nuxt-link-active {
            color: $color-main;
            &:after {
                transform: scaleX(1);
            }
        }
    }
}
</style>
