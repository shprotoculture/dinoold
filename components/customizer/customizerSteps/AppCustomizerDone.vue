<template lang="pug">
    .customizer__step
        .customizer__step-prev
            button.customizer__step-prev-button(type="button" @click="changeStep(2)")
                i.far.fa-chevron-left.customizer__step-prev-button-icon
                span.customizer__step-prev-button-text Назад
        .customizer__step-heading Шаг 4: Завершение
        .customizer__step-body
            .customizer__done
                .customizer__done-inner
                    .customizer__done-img
                        img(:src="getPackingImg")
                    .customizer__done-text {{getDoneText}}
        .customizer__step-next
            button.button.button--primary.button--medium.customizer__step-button(type="button" @click="refreshCustomizer") Собрать заново
            button.button.button--submit.button--medium.customizer__step-button(type="button" @click="changeStep(5)") Заказать
</template>

<script>
export default {
	methods: {
		changeStep(step) {
			this.$store.commit('changeStep', step);
		},
		refreshCustomizer() {
			this.$store.commit('refreshCustomizer');
			this.$store.commit('changeStep', 1);
		}
	},
	computed: {
		getPackingImg() {
			return this.$store.state.customizer.packingDoneImg;
		},
		currentPackingType() {
			return this.$store.state.customizer.currentPackingType;
		},
		getDoneText() {
			return this.currentPackingType == 'egg' ? 'Ваше динояйцо готово!' : 'Ваш динобокс готов!';
		}
	}
}
</script>

<style lang="scss">
@import "~assets/scss/vars";
// .customizer__done {
//     text-align: center;
//     &-inner {
//         display: inline-block;
//         animation: scl 0.5s ease forwards;
//     }
//     &-img {
//         width: 200px;
//         height: 200px;
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         background: #fff;
//         border-radius: 10px;
//         border: 1px solid #e6e6e6;
//         margin-bottom: 10px;
//     }
//     &-text {
//         font-size: 14px;
//         font-weight: 500;
//         text-transform: uppercase;
//         color: $color-main;
//     }
// }
.customizer__done {
	text-align: center;
	background: url(/img/321.gif) no-repeat center/contain;
	&-text {
		font-size: 14px;
		font-weight: 500;
		text-transform: uppercase;
		color: $color-main;
	}
	&-inner {
		display: inline-block;
		animation: scl 0.5s ease forwards;
	}
}

@keyframes scl {
	0% {
		transform: scale(0.5);
	}
	50% {
		transform: scale(1.2);
	}
	100% {
		transform: scale(1);
	}
}
</style>
