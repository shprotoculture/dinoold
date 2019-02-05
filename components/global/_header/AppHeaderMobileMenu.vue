<template lang="pug">
    .mobile-menu(:class="{'mobile-menu--active': mobMenuActive}")
        .mobile-menu__nav
            .container
                ul.mobile-menu__nav-list
                    li.mobile-menu__nav-item(v-for="(link, index) in links" :key="index")
                        nuxt-link.mobile-menu__nav-link(:to="link.to" exact) {{link.title}}
</template>

<script>
export default {
    computed: {
        links() {
            return this.$store.state.header.navLinks;
        },
        mobMenuActive() {
            return this.$store.state.header.mobMenuActive;
        }
    }
};
</script>

<style lang="scss">
@import "~assets/scss/vars";

.mobile-menu {
    display: none;
    background: #fff;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    position: fixed;
    transition: all 0.6s cubic-bezier(0.77, 0, 0.175, 1);
    transform: translate3d(-100%, 0, 0);
    z-index: 50;

    &__nav {
        position: absolute;
        top: 50px;
        right: 0;
        bottom: 0;
        left: 0;
        overflow-x: hidden;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
        &-list {
            padding: 30px 0;
        }
        &-link {
            display: block;
            padding: 15px 0;
            font-size: 14px;
            font-weight: 500;
            text-transform: uppercase;
            border-bottom: 1px solid #f2f2f2;
            &.nuxt-link-active {
                color: $color-main;
            }
        }
    }
    &--active {
        transform: translate3d(0, 0, 0);
    }

    @media screen and (max-width: 991px) {
        display: block;
    }
}
</style>
