import React from "react";
import {connect} from "react-redux";
import {addUserLoginData, authMe} from "../../redux/header-reducer";
import Header from "./Header";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.authMe();
    }

    render() {
        return (
            <Header isAuth={this.props.isAuth} email={this.props.email}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.authUser.isAuth,
        email: state.authUser.email
    }
}
export default connect(mapStateToProps, {addUserLoginData, authMe})(HeaderContainer);