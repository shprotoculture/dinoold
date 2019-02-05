export const header = {
    state: {
        mobMenuActive: false,
        navLinks: [
            {
                title: "Dinoshop",
                to: "/"
            },
            {
                title: "Каталог",
                to: "/catalog"
            },
            {
                title: "Подарок на день рождение",
                to: "/gift"
            },
            {
                title: "Доставка",
                to: "/delivery"
            }
        ]
    },
    mutations: {
        toggleMobMenu(state) {
            state.mobMenuActive = !state.mobMenuActive;
        },
        closeMobMenu(state) {
            state.mobMenuActive = false;
        }
    }
}