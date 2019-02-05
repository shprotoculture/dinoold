import { gifts } from './gifts';
export const customizer = {
    modules: {
        gifts
    },
    state: {
        currentStep: 1,
        customizerType: 'self',
        currentPackingType: null,
        currentPackingSize: null,
        currentGender: null,
        packingDoneImg: '',
        totalPrice: 0,
        selectedItems: []
    },
    mutations: {
        changeStep(state, payload) {
            state.currentStep = payload;
        },
        changeCustomizerType(state, payload) {
            state.customizerType = payload;
        },
        changePackingType(state, payload) {
            state.currentPackingType = payload;
        },
        changePackingSize(state, payload) {
            state.currentPackingSize = payload;
        },
        changeTotalPrice(state, payload) {
            state.totalPrice = payload;
        },
        changeGender(state, payload) {
            state.currentGender = payload;
        },
        pushItem(state, payload) {
            state.selectedItems.push(payload);
        },
        refreshCustomizer(state) {
            state.currentStep = 1;
            state.currentPackingType = null;
            state.currentPackingSize = null;
            state.totalPrice = 0;
            state.currentGender = null;
            state.packingDoneImg = '';
        },
        setPackingDoneImg(state, payload) {
            state.packingDoneImg = payload;
        }
    }
}