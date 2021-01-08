import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import s from './Dialogs.module.css';



const DialogItem = (props) => {
    return (
        <div className={s.dialogsItems}>
            <img src='https://image.freepik.com/free-vector/businessman-profile-cartoon_18591-58479.jpg' />
            <div className={s.dialogsName}><NavLink to={/dialogs/ + props.id}> {props.name}</NavLink></div>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.messages}>{props.message}</div>
    )
}


const Dialogs = (props) => {


    let dialogsElements =
        props.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />)

    let messagesElements =
        props.messages.map(m => <Message message={m.message} key={m.id} />)



    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.addMessage();
    }

    let onMessageChange = () => {
        let mess = newMessageElement.current.value;
        props.updateNewDialogsMessage(mess)

    }

    
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
            </div>
            <div>
                <div>
                    <textarea placeholder='Enter your message' onChange={onMessageChange} ref={newMessageElement} value={props.newDialogsMessage}></textarea>
                </div>
                <div>
                    <button onClick={addMessage}>Add message</button>
                </div>
            </div>
        </div>


    )
}

export default Dialogs;