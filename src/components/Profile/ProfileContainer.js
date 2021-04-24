import React from "react";
import classes from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyContainerPost from "./MyPosts/MyPostsContainer";



const Profile = () => {
    return <div className={classes}>
        <ProfileInfo />
        <MyContainerPost />
    </div>
}

export default Profile