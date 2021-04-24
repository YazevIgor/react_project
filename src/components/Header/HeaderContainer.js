import React from "react";
import * as axios from "axios";
import {connect} from "react-redux";
import {addUserLoginData} from "../../redux/auth-reducer";
import Header from "../Header/Header";
import {Login} from "./Login";
class LoginContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true}).then(response => {
            if (response.data.resultCode === 0)
            {
                this.props.addUserLoginData(response.data.data)
            }
        });
    }

    render() {
        return (
            <Header email = {this.props.email} />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        email: state.authUser.email
    }
}
export default connect(mapStateToProps, {addUserLoginData})(LoginContainer);