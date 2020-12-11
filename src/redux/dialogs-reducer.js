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
        case ADD_MESSAGE: {
            let newMessage = {
                message: state.newDialogsMessage,
            };

            let stateCopy = {...state};
            stateCopy.dialogs = [...state.dialogs];
            stateCopy.messages = [...state.messages];
            stateCopy.messages.push(newMessage)
            stateCopy.newDialogsMessage = ''
            return stateCopy;
        }

        case UPDATE_NEW_DIALOGS_MESSAGE: {
            let stateCopy = {...state};

            stateCopy.newDialogsMessage = action.updateMessage
            return stateCopy;
        }
        default: return state;
    }

}

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE })
export const updateNewDialogsMessageActionCreator = (mess) => ({ type: UPDATE_NEW_DIALOGS_MESSAGE, updateMessage: mess })

export default dialogsReducer