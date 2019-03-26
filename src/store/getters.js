const getters = {
    token: state => state.user.token,
    username: state => state.user.username,
    avatar: state => state.user.avatar,
    email: state => state.user.email,
    mobile: state => state.user.mobile,
    status: state => state.user.status,


    show_menu: state => state.common.show_menu,
    menu_active_key: state => state.common.menu_active_key
};
export default getters
