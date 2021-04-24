let initialState = {
    email: null,
    id: null,
    login: null,
    isAuth: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type){
        case 'ADD-USER-LOGIN-DATA':
            return {...state, email: action.userLoginData.email, id: action.userLoginData.id, login: action.userLoginData.login, isAuth: true}
        default: return state;
    }

}

export const addUserLoginData = (userLoginData) => {
    return {type: 'ADD-USER-LOGIN-DATA', userLoginData}
}


export default authReducer;