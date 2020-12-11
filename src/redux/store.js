// import dialogsReducer from './dialogs-reducer'
// import profileReducer from './profile-reducer'
// import friendsReducer from './friends-reducer'

// let store = {
//     _state: {


//         profilePage: {
//             posts: [
//                 { id: 1, message: 'Hi', likesCount: 50 },
//                 { id: 2, message: 'Hello', likesCount: 200 },
//             ],
//             newPostText: 'Russo'
//         },


//         dialogsPage: {
//             dialogs: [
//                 { id: 1, name: 'Rus' },
//                 { id: 2, name: 'Janna' },
//                 { id: 3, name: 'Molly' },
//             ],



//             messages: [
//                 { id: 1, message: 'Hi' },
//                 { id: 2, message: 'Hello' },
//                 { id: 3, message: 'Hola' },
//             ],

//             newDialogsMessage: 'Hi!'
//         },

//         friendsPage: {
//             persons: [
//                 { user: 'Rus' },
//                 { user: 'Jana' },
//                 { user: 'Molly' },
//             ]
//         }
//     },

//     _callSubscriber() {
//         console.log('state changed')
//     },

//     getState() {
//         return this._state;
//     },

//     subscribe(observer) {
//         this._callSubscriber = observer
//     },


//     dispatch(action) {

//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
//         this._state.profilePage = profileReducer(this._state.profilePage, action)
//         this._state.friendsPage = friendsReducer(this._state.friendsPage, action)
//         this._callSubscriber(this._state)

//     }
// }


// export default store