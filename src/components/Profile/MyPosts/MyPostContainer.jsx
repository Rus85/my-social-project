import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator } from '../../../redux/profile-reducer';
// import StoreContext from '../../../StoreContext';
import MyPosts from './MyPosts';


const mapStateToProps = (state) => {
   return {
    newPostText: state.profilePage.newPostText,
    posts: state.profilePage.posts
   }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (addNewPost) => {
      dispatch(addPostActionCreator(addNewPost))
    },
   }
}

const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps) (MyPosts)


export default MyPostsContainer;