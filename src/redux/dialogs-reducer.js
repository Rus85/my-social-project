const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_DIALOGS_MESSAGE = 'UPDATE-NEW-DIALOGS-MESSAGE'

let initialState = {


    dialogs: [
        { id: 1, name: 'Rus' },
        { id: 2, name: 'Janna' },
        { id: 3, name: 'Molly' },
    ],

    messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'Hello' },
        { id: 3, message: 'Hola' },
    ],

    newDialogsMessage: 'Hi!'
};


const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                message: state.newDialogsMessage,
            };

            return {
                ...state,
                messages: [...state.messages, newMessage],
                newDialogsMessage: ''

            }


        case UPDATE_NEW_DIALOGS_MESSAGE:

            return {
                ...state,
                newDialogsMessage: action.updateMessage
            }


        default: return state;
    }

}

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE })
export const updateNewDialogsMessageActionCreator = (mess) => ({ type: UPDATE_NEW_DIALOGS_MESSAGE, updateMessage: mess })

export default dialogsReducer