import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
// import StoreContext from '../../../StoreContext';
import MyPosts from './MyPosts';



// const MyPostsContainer = () => {

//   return (

//     <StoreContext.Consumer> 
//       { (store) => {

//         let state = store.getState();

//         let addPost = () => {
//           store.dispatch(addPostActionCreator())
//         }

//         let onPostChange = (text) => {
//           let action = updateNewPostTextActionCreator(text)
//           store.dispatch(action)
//         }

//         return (
//         <MyPosts addPost={addPost} updateNewPostText={onPostChange}
//           posts={state.profilePage.posts}
//           newPostText={state.profilePage.newPostText} />
//         )
//       }
//     }
//     </StoreContext.Consumer>
//   )

// }

const mapStateToProps = (state) => {
   return {
    newPostText: state.profilePage.newPostText,
    posts: state.profilePage.posts
   }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator())
    },
    updateNewPostText: (text) => {
      let action = updateNewPostTextActionCreator(text)
          dispatch(action)
    }
    }
}

const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps) (MyPosts)


export default MyPostsContainer;