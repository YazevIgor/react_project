import React from "react";
import {connect} from "react-redux";
import {addDataPhoto, getMyStatus, setMyStatus, setUserPhoto} from "../../redux/profile-reducer";
import Profile from "./Profile";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import Preloader from "../common/preloader/Preloader";


class ProfileContainer extends React.Component {
    componentDidMount() {

        let userId = this.props.match.params.userId;
        if (!userId) userId = this.props.myId;
        this.props.setUserPhoto(userId)
        this.props.getMyStatus(userId)
    }

    render() {

        return (
            <>
                <div>{this.props.isFetching ? Preloader() : null}</div>
                <Profile {...this.props}
                         photo = {this.props.photo}
                         myId={this.props.myId}
                         isAuth={this.props.isAuth}
                         status={this.props.status}
                         setMyStatus={this.props.setMyStatus}
                         getMyStatus={this.props.getMyStatus} /></>);
    }
}

const mapStateToProps = (state) => {
    return {
        photo: state.profilePage.photo,
        status: state.profilePage.status,
        myId: state.authUser.id,
        isFetching: state.profilePage.isFetching
    }
}
export default compose(
    connect(mapStateToProps, {setUserPhoto, getMyStatus,setMyStatus}),
    withRouter,
    withAuthRedirect)(ProfileContainer)
