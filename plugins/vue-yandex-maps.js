import Vue from 'vue';
import YmapPlugin from 'vue-yandex-maps';
const options = { // you may define your apiKey, lang and version or skip this.
    apiKey: 'eea64e0f-d22d-4796-ab84-18759383bcfc', // '' by default
    lang: 'ru_RU', // 'ru_RU' by default
    version: '2.1' // '2.1' by default
};
Vue.use(YmapPlugin, options);