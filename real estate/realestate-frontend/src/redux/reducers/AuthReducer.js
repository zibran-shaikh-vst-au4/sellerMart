const AuthReducer = (state = {}, actions) => {
    switch (actions.type) {
        case "SET_LOGIN":
            return { ...state, loggedIn: true, admin: actions.payload };
        case "SET_LOGOUT":
            return { ...state, loggedIn: false, admin: {} };
        default:
            return state;
    }
};

export default AuthReducer;