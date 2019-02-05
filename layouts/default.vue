<template lang="pug">
    #app
        app-header
        transition(name="page" @after-enter="afterPageEnter")
            nuxt
        app-footer
</template>

<script>
import AppHeader from "~/components/global/_header/AppHeader";
import AppFooter from "~/components/global/_footer/AppFooter";
export default {
    components: {
        AppHeader,
        AppFooter
    },
    methods: {
        afterPageEnter() {
            this.$store.commit("closeMobMenu");
        }
    },
    mounted() {
        this.$store.commit(
            "setProductsInCart",
            this.$cookies.get("products") || {}
        );
    }
};
</script>


<style></style>

