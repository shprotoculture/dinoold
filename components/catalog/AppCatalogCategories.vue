<template lang="pug">
    .catalog__categories
        ul.catalog__categories-list
            li.catalog__categories-item(v-for="category in categories" :key="category.id")
                app-catalog-category-item(:categoryID="category.id")
</template>

<script>
import AppCatalogCategoryItem from '~/components/catalog/AppCatalogCategoryItem';
export default {
    components: {
        AppCatalogCategoryItem
    },
    computed: {
        categories() {
            return this.$store.state.catalog.categories.categories.filter(category => !category.parentCategory);
        }
    }
};
</script>

<style lang="scss">
@import "~assets/scss/vars";

.catalog__categories {
    &-item {
        margin-bottom: 15px;
        &:last-child {
            margin-bottom: 0;
        }
    }
}
</style>
