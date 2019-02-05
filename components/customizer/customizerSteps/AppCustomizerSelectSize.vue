<template lang="pug">
    .customizer__step
        .customizer__step-prev
            button.customizer__step-prev-button(type="button" @click="changeStep(1)")
                i.far.fa-chevron-left.customizer__step-prev-button-icon
                span.customizer__step-prev-button-text Назад
        .customizer__step-heading Шаг 2: Выберите размер упаковки
        .customizer__step-body
            .customizer__step-selects
                .customizer__step-select(
                    v-for="(packingSize, index) in filtredPackingSizes" 
                    :key="index" 
                    :class="{'customizer__step-select--active': packingSize.size == currentPackingSize}")

                    .customizer__step-select-content(@click="changePackingSize(packingSize.size, packingSize.price, packingSize.img)")
                        div
                            img(:src="packingSize.img" class="customizer__step-select-image")
                            .customizer__step-select-name {{packingSize.name}}
                            .customizer__step-select-optional {{packingSize.price}}&#8381;
        .customizer__step-next
            button.button.button--submit.button--medium(type="button" @click="changeStep(3)" :class="{'button--disabled': !currentPackingSize}") Следующий шаг

</template>

<script>
export default {
    data () {
        return {
            packingSizes: [
                {type: 'egg', size: 's', name: 'Динояйцо Small', price: 2000, img: '/img/egg.png'},
                {type: 'egg', size: 'm', name: 'Динояйцо Medium', price: 4000, img: '/img/egg.png'},
                {type: 'egg', size: 'l', name: 'Динояйцо Large', price: 6000, img: '/img/egg.png'},
                {type: 'egg', size: 'xxl', name: 'Динояйцо XXL', price: 8000, img: '/img/egg.png'},
                {type: 'box', size: 's', name: 'Динобокс Small', price: 1000, img: '/img/box-s.png'},
                {type: 'box', size: 'm', name: 'Динобокс Medium', price: 3000, img: '/img/box-m.png'},
                {type: 'box', size: 'l', name: 'Динобокс Large', price: 5000, img: '/img/box-l.png'},
                {type: 'box', size: 'xxl', name: 'Динобокс XXL', price: 7000, img: '/img/box-xxl.png'},
            ],
        }
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
        }
    },
    methods: {
        changePackingSize (size, price, packingImg) {
            this.$store.commit('changePackingSize', size);
            this.$store.commit('changeTotalPrice', parseInt(price));
            this.$store.commit('setPackingDoneImg', packingImg);
        },
        changeStep (step) {
            // if(!this.currentPackingSize) return false;
            this.$store.commit('changeStep', step);
        }
    }
}
</script>

<style lang="scss">
</style>
