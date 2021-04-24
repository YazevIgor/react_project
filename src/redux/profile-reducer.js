import {profileAPI} from "../dal/api";

let initialState = {
    postsData: [
        {post: "Ya poel"},
        {post: "Ya pospal"},
        {post: "Ya ustal"}],
    postText: '',
    photo: null,
    status: '',
    isFetching: false
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD-POST':
            return {...state, postsData: [...state.postsData, {post: state.postText}], postText: ''};
        case 'ADD-DATA-POSTS-TEXT':
            return {...state, postText: action.postText};
        case 'ADD-DATA-PHOTO':
            return {...state, photo: action.photo}
        case 'UPDATE-MY-STATUS':
            return {...state, status: action.status}
        case 'UPDATE-IS-FETCHING':
            return {...state, isFetching: action.value}
        default:
            return state;
    }

}
export const addPostCreateAction = () => {
    return {type: 'ADD-POST'}
}
export const addDataPostTextCreateAction = (text) => {
    return {type: 'ADD-DATA-POSTS-TEXT', postText: text};
}
export const addDataPhoto = (photo) => {
    return {type: 'ADD-DATA-PHOTO', photo};
}
export const updateMyStatus = (status) => {
    return {type: 'UPDATE-MY-STATUS', status};
}
export const updateIsFetching = (value) => {
    return {type: 'UPDATE-IS-FETCHING', value: value}
}
export const setUserPhoto = (id) => {
    return (dispatch) => {
        profileAPI.GetUserProfile(id).then(data =>{
            dispatch(addDataPhoto(data))
        })
    }
}
export const getMyStatus = (id) => {
    return (dispatch) => {
        dispatch(updateIsFetching(true));
        profileAPI.GetMyStatus(id).then(data => {
            dispatch(updateMyStatus(data))
            dispatch(updateIsFetching(false));
        })
    }
}
export const setMyStatus = (status) => {
    return (dispatch) => {
        dispatch(updateIsFetching(true))
        profileAPI.SetMyStatus(status).then(response => {
            if (response === 0 )
                dispatch(updateMyStatus(status))
            dispatch(updateIsFetching(false))
        })
    }
}


export default profileReducer;