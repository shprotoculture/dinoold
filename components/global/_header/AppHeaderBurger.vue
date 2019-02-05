<template lang="pug">
    button.burger(type="button" :class="{'burger--active': mobMenuActive}" @click="toggleMobMenu")
        span.burger__line.burger__line-f
        span.burger__line.burger__line-s
        span.burger__line.burger__line-t
</template>

<script>
export default {
    computed: {
        mobMenuActive() {
            return this.$store.state.header.mobMenuActive;
        }
    },
    methods: {
        toggleMobMenu() {
            this.$store.commit("toggleMobMenu");
        }
    }
};
</script>

<style lang="scss">
.burger {
    border: none;
    background: none;
    width: 50px;
    height: 50px;
    position: relative;
    margin-left: -15px;
    display: none;
    &__line {
        background: #4d4d4d;
        display: block;
        width: 20px;
        height: 2px;
        position: absolute;
        top: 50%;
        left: 15px;
        transition: 0.25s 0.25s margin ease, 0.25s transform ease;
        &-f {
            margin-top: -7px;
        }
        &-s {
            margin-top: -1px;
        }
        &-t {
            margin-top: 5px;
        }
    }
    &--active {
        .burger__line {
            transition: 0.25s margin ease, 0.25s 0.25s transform ease;
            &-f,
            &-s {
                margin-top: -1px;
                transform: rotate(45deg);
            }
            &-t {
                margin-top: -1px;
                transform: rotate(-45deg);
            }
        }
    }

    @media screen and (max-width: 991px) {
        display: block;
    }
}
</style>
