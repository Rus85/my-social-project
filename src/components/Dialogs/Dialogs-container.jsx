import React from 'react';
import Dialogs from './Dialogs';
import { addMessageActionCreator, updateNewDialogsMessageActionCreator } from '../../redux/dialogs-reducer';
// import StoreContext from '../../StoreContext';
import { connect } from 'react-redux';


// const DialogsContainer = () => {
//     return (
//         <StoreContext.Consumer>
//             { (store) => {

//                 let state = store.getState();

//                 let addMessage = () => {
//                     store.dispatch(addMessageActionCreator())
//                     // newMessageElement.current.value = ''
//                 }

//                 let onMessageChange = (mess) => {
//                     let action = updateNewDialogsMessageActionCreator(mess)
//                     store.dispatch(action)
//                 }


//                 return (
//                 <Dialogs addMessage={addMessage} updateNewDialogsMessage={onMessageChange}
//                     dialogs={state.dialogsPage.dialogs}
//                     messages={state.dialogsPage.messages}
//                     newDialogsMessage={state.dialogsPage.newDialogsMessage} />
//                 )
//             }
//             }
//         </StoreContext.Consumer>
//     )
// }

const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newDialogsMessage: state.dialogsPage.newDialogsMessage

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


const DialogsContainer = connect (mapStateToProps, mapDispatchToProps) (Dialogs);

export default DialogsContainer

