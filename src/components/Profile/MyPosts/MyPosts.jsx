import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';
import { Form, Field } from 'react-final-form';



const MyPosts = (props) => {

  let postsElement =
    [...props.posts]
    .reverse().map(p => <Post id={p.id} like={p.likesCount} key={p.id} message={p.message} />)

  let newPostElement = React.createRef();

  let addPost = () => {
    props.addPost();
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  let addNewPost = (values) => {
    props.addPost(values.newPostBody);
  }

  const validate = (e) => {
    const errors = {}

    if (e.newPostBody && e.newPostBody.length < 5) {
      errors.newPostBody = 'too short message'
    }
    return errors
  }

  return (
    <div className={s.postsBlock}>
      <h3>My news</h3>

      <Form
        initialValues={{ newPostBody: '' }}
        onSubmit={addNewPost}
        validate={validate}>

          {({ handleSubmit, pristine, form, submitting }) => (

          <form onSubmit={handleSubmit}>

            <div>
              <Field
                name="newPostBody"
                 render={({input, meta}) => (
                   <div>
                     <textarea {...input} placeholder='' />
                     {meta.touched && meta.error && <div>{meta.error}</div>}
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

      <div className={s.posts}>
        {postsElement}

      </div>
    </div>
  )
}



export default MyPosts;