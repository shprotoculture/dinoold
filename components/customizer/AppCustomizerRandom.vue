<template lang="pug">
div
    .customizer__body
        app-customizer-select-type(v-if="currentStep == 1")
        app-customizer-select-size(v-if="currentStep == 2")
        app-customizer-info(v-if="currentStep == 3")
        app-customizer-finish(v-if="currentStep == 4")
    div.customizer__examples(v-swiper:swiperClients="swiperClinetsOpt")
        .customizer__examples-title Примеры подарков
        .swiper-wrapper
            .swiper-slide(v-for="(client, i) in clients" :key="i")
                .dino-swiper__tile
                    a.dino-swiper__tile-link(data-fancybox :href="client")
                        img(:src="client")
        .swiper-controls.swiper-controls--center.swiper-controls--green
            .swiper-control.swiper-control--prev
                i.fal.fa-long-arrow-left
            .swiper-control-frac
            .swiper-control.swiper-control--next
                i.fal.fa-long-arrow-right
</template>

<script>
import AppCustomizerSelectType from '~/components/customizer/customizerSteps/AppCustomizerSelectType';
import AppCustomizerSelectSize from '~/components/customizer/customizerSteps/AppCustomizerSelectSize';
import AppCustomizerInfo from '~/components/customizer/customizerSteps/AppCustomizerInfo';
import AppCustomizerFinish from '~/components/customizer/customizerSteps/AppCustomizerFinish';
export default {
    components: {
        AppCustomizerSelectType,
        AppCustomizerSelectSize,
        AppCustomizerInfo,
        AppCustomizerFinish
    },
    data () {
        return {
            clients: [
                '/img/dino-client-1.jpg',
                '/img/dino-client-2.jpg',
                '/img/dino-client-3.jpg',
                '/img/dino-client-4.jpg',
                '/img/dino-client-5.jpg',
                '/img/dino-client-6.jpg',
            ],
            swiperClinetsOpt: {
                slidesPerView: 3,
                navigation: {
                    nextEl: '.swiper-control--next',
                    prevEl: '.swiper-control--prev',
                },
                pagination: {
                    el: '.swiper-control-frac',
                    type: 'fraction'
                },
                breakpoints: {
                    1200: {
                        slidesPerView: 3,
                    },
                    992: {
                        slidesPerView: 2,
                    },
                    576: {
                        slidesPerView: 1,
                    },
                }
                
            },
        }
    },
    computed: {
        currentStep () {
            return this.$store.state.customizer.currentStep;
        }
    }
}
</script>

<style lang="scss">
.dino-swiper {
    &__tile {
        padding: 0 15px;
    }
}
</style>
