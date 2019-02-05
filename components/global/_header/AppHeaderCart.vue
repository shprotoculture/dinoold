<template lang="pug">
    .header__cart
        nuxt-link.header__cart-link(to="/cart")
            i.header__cart-icon.far.fa-shopping-cart
            span.header__cart-text  Корзина
            span.header__cart-counter  ({{cartItemsCounter}})
</template>

<script>
export default {
    computed: {
        cartItemsCounter() {
            return Object.keys(this.$store.state.cart.productsInCart).length;
        }
    }
};
</script>

<style lang="scss">
.header__cart {
    &-link {
        color: #4d4d4d;
        font-size: 14px;
        font-weight: 500;
    }

    @media screen and (max-width: 991px) {
        &-text {
            display: none;
        }
    }
}
</style>
