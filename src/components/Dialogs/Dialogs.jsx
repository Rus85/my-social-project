import React from 'react';
import { Form, Field } from 'react-final-form';
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

    let addNewMessage = (values) => {
        props.addMessage(values.newMessageBody);
    }

    const validate = (e) => {
        const errors = {}

        if (e.newMessageBody && e.newMessageBody.length < 5) {
            errors.newMessageBody = 'SHORT MESSAGE'
       } 
       
       else if (e.newMessageBody && e.newMessageBody.length > 10) {
        errors.newMessageBody  = 'MAX SYMBOLS 10'
       }
        return errors
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
            </div>

            <Form
                initialValues={{ newMessageBody: '' }}
                onSubmit={addNewMessage}
                validate={validate}
            >

            
                {({ handleSubmit, pristine, form, submitting }) => (
                    

                    <form onSubmit={handleSubmit}>

                        <div>
                            <Field
                                name="newMessageBody"
                                render={({ input, meta }) => (

                                    <div>
                                        <textarea {...input} placeholder='Message' />
                                        {meta.touched && meta.error && <div className={s.shortMessage}>{meta.error}</div>}
                                    </div>
                                )}
                            />
                        </div>
                        <div>
                            <button type="submit" disabled={submitting}>Submit</button>
                        </div>

                    </form>
                )}
            </Form>
        </div>

    )

}


export default Dialogs;