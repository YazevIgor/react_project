import React from "react";


import Dialogs from "./Dialogs";
import {connect} from "react-redux";

import {AddMessageCreateAction, AddMessageTextCreateAction} from "../../redux/dialogs-reducer";

const mapStateToProps = (state) =>{
    return {
        dialogsData: state.messagesPage.dialogsData,
        messagesData: state.messagesPage.messagesData,
        messagesText: state.messagesPage.messagesText
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        AddMessageCreateAction: () => dispatch(AddMessageCreateAction()),
        AddMessageTextCreateAction: (text) => dispatch(AddMessageTextCreateAction(text))
    }
}

const MyDialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default MyDialogsContainer;