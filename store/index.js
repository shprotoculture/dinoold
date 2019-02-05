import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

/*MODULES*/
import { header } from './global/header';
import { catalog } from './catalog/index';
import { cart } from './cart/index';
import { customizer } from './customizer/index';

const store = () => new Vuex.Store({
    modules: {
        header,
        catalog,
        cart,
        customizer
    }
});

export default store;