import {authAPI} from "../dal/api";

let initialState = {
    email: null,
    id: null,
    login: null,
    isAuth: false,
};

const headerReducer = (state = initialState, action) => {
    switch (action.type){
        case 'ADD-USER-LOGIN-DATA':
            return {...state, email: action.userLoginData.email, id: action.userLoginData.id, login: action.userLoginData.login, isAuth: true}
        default: return state;
    }

}

export const addUserLoginData = (userLoginData) => {
    return {type: 'ADD-USER-LOGIN-DATA', userLoginData}
}
export const authMe = () => {
    return (dispatch) => {
        authAPI.me().then(response =>{
            if (response.resultCode === 0)
                dispatch(addUserLoginData(response.data))
        })
    }
}


export default headerReducer;