<template lang="pug">
    .customizer__gift
        .customizer__gift-selected(v-show="selectText !== 'Выберите предмет'")
            <i class="far fa-check"></i>
        .customizer__gift-image-wrapper
            img(:src="giftImg")
        .customizer__gift-select
                p.customizer__gift-select-text {{selectText}}
                select(@change="selectGift")
                    option(checked style="display: none;")
                    option(v-for="(option, index) in gift") {{option.title}}
                span.customizer__gift-select-icon
                    i.far.fa-chevron-down

</template>

<script>
export default {
    props: ['gift'],
    data () {
        return {
            selectText: 'Выберите предмет',
            giftImg: '/img/unknown-sign.svg'
        }
    },
    methods: {
        selectGift(e) {
            this.selectText = e.target.value;
            this.giftImg = this.gift[e.target.selectedIndex - 1].img;
            this.$emit('itemSelected', e.target.value);
        }
    }
}
</script>

<style lang="scss">
@import "~assets/scss/vars";
.customizer__gift {
    background: #fff;
    border-radius: 10px;
    border: 1px solid #e6e6e6;
    padding: 15px;
    text-align: center;
    position: relative;
    &-selected {
        width: 20px;
        height: 20px;
        border-radius: 100%;
        background: $color-main;
        color: #fff;
        text-align: center;
        line-height: 20px;
        position: absolute;
        top: 10px;
        right: 10px;
        font-size: 12px;
    }
    &-image-wrapper {
        margin-bottom: 15px;
        img {
            width: 150px;
            height: 150px;
        }
    }
    &-select {
        position: relative;
        border: 2px solid #f2f2f2;
        select {
            width: 100%;
            height: 35px;
            opacity: 0;
            position: relative;
            z-index: 10;
        }
        &-text {
            position: absolute;
            font-size: 12px;
            font-weight: 500;
            color: $color-main;
            left: 15px;
            top: 50%;
            transform: translateY(-50%);
            z-index: 1;
        }
        &-icon {
            position: absolute;
            right: 0;
            top: 0;
            font-size: 12px;
            color: $color-main;
            display: inline-block;
            width: 20px;
            height: 35px;
            background: #fff;
            z-index: 2;
            line-height: 35px;
        }
    }
}
</style>
