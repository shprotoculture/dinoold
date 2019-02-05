<template lang="pug">
    .customizer__step
        .customizer__step-prev
                button.customizer__step-prev-button(type="button" @click="changeStep(2)")
                    i.far.fa-chevron-left.customizer__step-prev-button-icon
                    span.customizer__step-prev-button-text Назад
        .customizer__step-heading Шаг 3: Выберите предметы
        .customizer__step-body
            .customizer__step-gifts-grid.row
                .col-md-3.p-15(v-for="(gift, key) in gifts" :key="key")
                    app-customizer-gift(:gift="gift" @itemSelected="pushItem")
        .customizer__step-next
            button.button.button--submit.button--medium(type="button" @click="changeStep(4)" :class="{'button--disabled': selectedItems.length < gifts.length}") Следующий шаг

</template>

<script>
import AppCustomizerGift from '~/components/customizer/AppCustomizerGift';
export default {
    components: {
        AppCustomizerGift
    },
    computed: {
        currentPackingType() {
            return this.$store.state.customizer.currentPackingType;
        },
        currentPackingSize() {
            return this.$store.state.customizer.currentPackingSize;
        },
        filtredPackingSizes() {
            return this.packingSizes.filter(size => size.type == this.currentPackingType);
        },
        gifts() {
            if(this.currentPackingType && this.currentPackingSize)
            return this.$store.state.customizer.gifts.list[this.currentPackingType][this.currentPackingSize];
        },
        selectedItems () {
            return this.$store.state.customizer.selectedItems;
        }
    },
    methods: {
        changeStep (step) {
            // if(this.selectedItems.length < this.gifts.length) return false;
            this.$store.commit('changeStep', step);
        },
        pushItem(e) {
            this.$store.commit('pushItem', e);
        }
    }
}
</script>

<style lang="scss">
</style>
