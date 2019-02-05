<template lang="pug">
    .customizer__step
        .customizer__step-heading Шаг 1: Выберите упаковку
        .customizer__step-body
            .customizer__step-selects
                .customizer__step-select(
                    v-for="(packingType, index) in packingTypes" 
                    :key="index" 
                    :class="{'customizer__step-select--active': packingType.type == currentPackingType}")

                    .customizer__step-select-content(@click="changePackingType(packingType.type)")
                        div
                            img(:src="packingType.img" class="customizer__step-select-image")
                            .customizer__step-select-name {{packingType.name}}
        .customizer__step-next
            button.button.button--submit.button--medium(type="button" @click="changeStep(2)" :class="{'button--disabled': !currentPackingType}") Следующий шаг

</template>

<script>
export default {
    data () {
        return {
            packingTypes: [
                {type: 'egg', name: 'Динояйцо', img: '/img/egg.svg'},
                {type: 'box', name: 'Динобокс', img: '/img/box.svg'},
            ]
        }
    },
    computed: {
        currentPackingType() {
            return this.$store.state.customizer.currentPackingType;
        }
    },
    methods: {
        changePackingType (type) {
            this.$store.commit('changePackingType', type);
            this.$store.commit('changePackingSize', null);
        },
        changeStep (step) {
            if (!this.currentPackingType) return false;
            this.$store.commit('changeStep', step);
        }
    }
}
</script>

<style lang="scss">
</style>
