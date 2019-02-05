<template lang="pug">
    .customizer__body
        app-customizer-select-type(v-if="currentStep == 1")
        app-customizer-select-size(v-if="currentStep == 2")
        app-customizer-select-items(v-if="currentStep == 3")
        app-customizer-done(v-if="currentStep == 4")
        app-customizer-finish(v-if="currentStep == 5")
</template>

<script>
import AppCustomizerSelectType from '~/components/customizer/customizerSteps/AppCustomizerSelectType';
import AppCustomizerSelectSize from '~/components/customizer/customizerSteps/AppCustomizerSelectSize';
import AppCustomizerSelectItems from '~/components/customizer/customizerSteps/AppCustomizerSelectItems';
import AppCustomizerDone from '~/components/customizer/customizerSteps/AppCustomizerDone';
import AppCustomizerFinish from '~/components/customizer/customizerSteps/AppCustomizerFinish';
export default {
    components: {
        AppCustomizerSelectType,
        AppCustomizerSelectSize,
        AppCustomizerSelectItems,
        AppCustomizerFinish,
        AppCustomizerDone
    },
    computed: {
        currentStep () {
            return this.$store.state.customizer.currentStep;
        }
    }
}
</script>

<style lang="scss">
</style>
