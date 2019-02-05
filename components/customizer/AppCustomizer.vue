<template lang="pug">
    .customizer
        .customizer__heading Собрать подарок
        .customizer__tabs
            button.customizer__tabs-button(
                type="button"
                v-for="(button, index) in customizerTypeButtons"
                :key="index"
                :class="{'customizer__tabs-button--active': customizerType == button.type}"
                @click.prevent="changeCustomizerType(button.type)") {{button.title}}
        .customizer__content
            app-customizer-self(v-if="customizerType == 'self'")
            app-customizer-random(v-if="customizerType == 'random'")
            

</template>

<script>
import AppCustomizerSelf from '~/components/customizer/AppCustomizerSelf';
import AppCustomizerRandom from '~/components/customizer/AppCustomizerRandom';
export default {
	components: {
		AppCustomizerSelf,
		AppCustomizerRandom
	},
	data() {
		return {
			customizerTypeButtons: [
				{ type: 'self', title: 'Самому' },
				{ type: 'random', title: 'Случайным образом' },
			]
		}
	},
	computed: {
		customizerType() {
			return this.$store.state.customizer.customizerType;
		}
	},
	methods: {
		changeCustomizerType(type) {
			this.$store.commit('changeCustomizerType', type);
			this.$store.commit('refreshCustomizer');
		}
	}
}
</script>

<style lang="scss">
@import "~assets/scss/vars";
.customizer {
	&__heading {
		font-size: 36px;
		font-weight: 300;
		margin-bottom: 30px;
	}
	&__tabs {
		border-bottom: 3px solid #f2f2f2;
		margin-bottom: 30px;
		&-button {
			display: inline-block;
			background: none;
			border: none;
			margin-right: 30px;
			font-size: 14px;
			font-weight: 500;
			text-transform: uppercase;
			position: relative;
			padding: 5px 0;
			&:after {
				content: "";
				position: absolute;
				left: 0;
				bottom: -3px;
				width: 100%;
				height: 3px;
				background: $color-main;
				display: none;
			}
			&--active {
				color: $color-main;
				&:after {
					display: block;
				}
			}
		}
	}
	&__step {
		background: #f2f2f2;
		padding: 60px;
		position: relative;
		&-button {
			margin: 0 15px;
			width: 160px;
			white-space: nowrap;
		}
		&-prev {
			position: absolute;
			left: 30px;
			top: 30px;
			&-button {
				background: none;
				border: none;
				display: flex;
				align-items: center;
				&-icon {
					font-size: 16px;
				}
				&-text {
					font-weight: 500;
					display: inline-block;
					padding-left: 5px;
				}
			}
		}
		&-heading {
			text-align: center;
			font-size: 24px;
			font-weight: 300;
			margin-bottom: 30px;
		}
		&-selects {
			display: flex;
			align-items: center;
			justify-content: center;
		}
		&-select {
			padding: 15px;
			&-content {
				width: 200px;
				height: 200px;
				background: #fff;
				border-radius: 10px;
				display: flex;
				align-items: center;
				justify-content: center;
				text-align: center;
				cursor: pointer;
				border: 1px solid #e6e6e6;
				transition: 0.25s ease;
			}
			&-image {
				max-width: 100px;
			}
			&-name {
				margin-top: 10px;
				font-size: 12px;
				font-weight: 500;
				text-transform: uppercase;
			}
			&-optional {
				font-size: 12px;
				font-weight: 600;
				margin-top: 5px;
				color: $color-main;
			}
			&--active {
				.customizer__step-select-content {
					transform: scale(1.1);
					box-shadow: 0 0 15px rgba(#000, 0.1);
				}
			}
		}
		&-inputs {
			max-width: 460px;
			margin: 15px auto 0;
		}
		&-next {
			text-align: center;
			padding-top: 30px;
		}
	}
	&__examples {
		margin: 0 -15px;
		&-title {
			padding: 30px 15px;
			font-size: 20px;
			font-weight: 300;
		}
	}
}
</style>
