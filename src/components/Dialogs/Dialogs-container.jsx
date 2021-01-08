import React from 'react';
import Dialogs from './Dialogs';
import { addMessageActionCreator, updateNewDialogsMessageActionCreator } from '../../redux/dialogs-reducer';
// import StoreContext from '../../StoreContext';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';



const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newDialogsMessage: state.dialogsPage.newDialogsMessage,
    
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        updateNewDialogsMessage: (mess) => {
            dispatch(updateNewDialogsMessageActionCreator(mess));
        },
        addMessage: () => {
            dispatch(addMessageActionCreator())
        }
    }
}

export default compose (

    connect (mapStateToProps, mapDispatchToProps),
    withAuthRedirect
) 

(Dialogs)


