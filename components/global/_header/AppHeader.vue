<template lang="pug">
    .nav-wrap
        header.header
            .header__top
                .header__top-content.container
                    app-header-burger
                    app-header-contacts
                    app-logo
                    app-header-cart
            .header__bottom
                .header__bottom-content.container
                    app-header-main-nav
        app-header-mobile-menu
        

    
</template>

<script>
import AppHeaderContacts from "~/components/global/_header/AppHeaderContacts";
import AppLogo from "~/components/global/_other/AppLogo";
import AppHeaderCart from "~/components/global/_header/AppHeaderCart";
import AppHeaderMainNav from "~/components/global/_header/AppHeaderMainNav";
import AppHeaderBurger from "~/components/global/_header/AppHeaderBurger";
import AppHeaderMobileMenu from "~/components/global/_header/AppHeaderMobileMenu";
export default {
    components: {
        AppHeaderContacts,
        AppLogo,
        AppHeaderCart,
        AppHeaderMainNav,
        AppHeaderBurger,
        AppHeaderMobileMenu
    }
};
</script>

<style lang="scss">
.header {
    background: #fff;
    box-shadow: 0 3px 7px rgba(#000, 0.07);
    min-width: 320px;
    z-index: 100;
    position: relative;
    &__top {
        padding: 10px 0;
        border-bottom: 1px solid #f2f2f2;
        &-content {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    }

    @media screen and (max-width: 991px) {
        &__top {
            border-bottom: none;
        }
        &__bottom {
            display: none;
        }
    }

    @media screen and (max-width: 767px) {
        height: 50px;
        width: 100%;
        position: fixed;
        &__top {
            padding: 0;
        }
    }
}
</style>
