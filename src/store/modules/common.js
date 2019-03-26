const common = {
    state: {
        show_menu: true,
        menu_active_key: ''
    },

    mutations: {
        SET_SHOW_MENU: (state, status) => {
            state.show_menu = status
        },
        SET_MENU_ACTIVE_KEY: (state, key) => {
            state.menu_active_key = key
        }
    },

    actions: {
        SetShowMenu({ commit }, status) {
            commit('SET_SHOW_MENU', status)
        },
        SetMenuActiveKey({ commit }, key) {
            commit('SET_MENU_ACTIVE_KEY', key)
        }
    }
};

export default common
