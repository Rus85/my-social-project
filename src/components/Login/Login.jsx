import React from 'react'
import { Form, Field } from 'react-final-form'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { LoginApi } from '../../redux/auth-reducer'
import s from './Login.module.css'

const Login = (props) => {

  const onSubmit = (values) => {
    props.LoginApi(values.email, values.password, values.rememberMe)
  }

  if (props.isAuth) {
    return <Redirect to={'/profile'} />
  }

  
  const MyForm = () => {

    return (

      <Form
        initialValues={{ firstName: '' }}
        onSubmit={onSubmit}
        // validate={}
      >
        {({ handleSubmit, pristine, form, submitting }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <Field
                name="email"
                component="input"
                type="text"
                placeholder="email"
              />
            </div>
            <div>
              <Field
                name="password"
                component="input"
                type="password"
                placeholder="password"
              />
            </div>
            <div>
              <Field component='input' name='rememberMe' type='checkbox' /> remember me
     </div>
            <div>
              <button type="submit" disabled={submitting}>
                Submit
       </button>
              <button
                type="button"
                disabled={pristine || submitting}
                onClick={form.reset}>Clear Values</button>
            </div>
         </form>
        )}
      </Form>
    )
  }


  return (
    <div>
      <h1>LOGIN</h1>
      <MyForm />
    </div>


  )
}


const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
})


export default connect(mapStateToProps, {LoginApi})(Login)
