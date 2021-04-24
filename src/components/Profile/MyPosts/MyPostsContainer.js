import React from "react";
import {addDataPostTextCreateAction,addPostCreateAction,} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
        textData: state.profilePage.postText
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addPostCreateAction: () => dispatch(addPostCreateAction()),
        addDataPostTextCreateAction: (text) => dispatch(addDataPostTextCreateAction(text))
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;