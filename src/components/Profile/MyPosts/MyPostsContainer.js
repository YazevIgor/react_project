import React from "react";
import {AddDataPostTextCreateAction, AddPostCreateAction} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
        textData: state.profilePage.textData
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        AddPostCreateAction: () => dispatch(AddPostCreateAction()),
        AddDataPostTextCreateAction: (text) => dispatch(AddDataPostTextCreateAction(text))
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;