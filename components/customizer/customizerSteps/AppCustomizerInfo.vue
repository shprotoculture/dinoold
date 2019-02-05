<template lang="pug">
    .customizer__step
        .customizer__step-prev
            button.customizer__step-prev-button(type="button" @click="changeStep(2)")
                i.far.fa-chevron-left.customizer__step-prev-button-icon
                span.customizer__step-prev-button-text Назад
        .customizer__step-heading Шаг 3: Информация о ребенке
        .customizer__step-body
            .customizer__step-selects
                .customizer__step-select(
                    v-for="(gender, index) in genders" 
                    :key="index" 
                    :class="{'customizer__step-select--active': gender.type == currentGender}")

                    .customizer__step-select-content(@click="changeGender(gender.type)")
                        div
                            img(:src="gender.img" class="customizer__step-select-image")
                            .customizer__step-select-name {{gender.name}}
            .customizer__step-inputs
                .customizer__input.p-15
                    .input
                        input(type="text" placeholder="Имя ребенка")
                .customizer__input.p-15
                    .input
                        input(type="text" placeholder="Возраст ребенка")
        .customizer__step-next
            button.button.button--submit.button--medium(type="button" @click="changeStep(4)") Следующий шаг

</template>

<script>
export default {
    data () {
        return {
            genders: [
                {type: 'boy', name: 'Мальчик', img: '/img/boy.svg'},
                {type: 'girl', name: 'Девочка', img: '/img/girl.svg'},
            ]
        }
    },
    computed: {
        currentPackingType() {
            return this.$store.state.customizer.currentPackingType;
        },
        currentPackingSize() {
            return this.$store.state.customizer.currentPackingSize;
        },
        currentGender() {
            return this.$store.state.customizer.currentGender;
        }
    },
    methods: {
        changeGender (gender) {
            this.$store.commit('changeGender', gender);
        },
        changeStep (step) {
            this.$store.commit('changeStep', step);
        }
    }
}
</script>

<style lang="scss">
</style>
