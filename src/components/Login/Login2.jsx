import React from 'react'
import { Form, Field } from 'react-final-form'

 const MyForm = props => {

   return (
    <Form
      initialValues={{
        firstName: 'Dan'
      }}
      onSubmit={values => {
        // send values to the cloud
      }}
      validate={values => {
        // do validation here, and return errors object
      }}
    >
      {({ handleSubmit, pristine, form, submitting }) => (
         <form onSubmit={handleSubmit}>
           <div>
             <Field
               name="firstName"
               component="input"
               type="text"
               placeholder="First Name"
             />
           </div>
           <div>
             <label>Last Name</label>
             <Field
               name="lastName"
               component="input"
               type="text"
               placeholder="Last Name"
             />
           </div>
           <div>
             <button type="submit" disabled={submitting}>
               Submit
             </button>
            <button
              type="button"
              disabled={pristine || submitting}
             onClick={form.reset}
            >
              Clear Values
            </button>
           </div>
         </form>
      )}
    </Form>
   )
 }



 const Login = (props) => {

  const onSubmit = (formData) => {
      
  }

  return <div>
      <h1>LOGIN</h1>
      <MyForm onSubmit={onSubmit} />
  </div>
}

export default Login