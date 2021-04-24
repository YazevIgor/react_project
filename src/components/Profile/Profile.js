import React from "react";
import classes from './Profile.module.css'
import MyContainerPost from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
const Profile = (props) => {
    return <div className={classes}>
        <img src={props.photo} alt=""/>
        <ProfileInfo status={props.status} setMyStatus={props.setMyStatus} getMyStatus={props.getMyStatus} myId={props.myId} />
        <MyContainerPost />
    </div>
}

export default Profile