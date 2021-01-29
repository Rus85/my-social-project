import React from 'react';
import { Form, Field } from 'react-final-form'
import style from './News.module.css'


const News = () => {

    const onSubmit = (e) => {
        
    }
    
    const validate = (e) => {
        const errors = {}
        if (e.firstName && e.firstName.length < 5) {
            errors.firstName = 'Too short name'
        }
        if (e.bio && e.bio.length < 5) {
            errors.bio = 'Too short message'
        }
        return errors
    }
    
    const InterestPicker = () => {
        
    }

    return (
        <div>
            Top news
            <div>
                <div>
                <Form
                    onSubmit={onSubmit}
                    validate={validate}
                    render={({ handleSubmit, submitting }) => (
                        <form onSubmit={handleSubmit}>
                            <div>
                            
                                <Field name="firstName" component="input" placeholder="First Name" >
                                {({ input, meta }) => (
                                    <div className={style.field}>
                                        <label>First Name</label>
                                        <input type="text" {...input} placeholder="FirstName" />
                                        {meta.touched && meta.error && <div>{meta.error}</div>}
                            </div>
                                )}
                                </Field>
                            
                            <div className={style.field}>
                                <label>Last Name</label>
                                <Field name="lastName" component="input" placeholder="Last Name" />
                            </div>

                            <Field name="phone">
                                {({ input, meta }) => (
                                    <div className={style.field}>
                                        <label>Phone</label>
                                        <input {...input} type="text" inputMode='tel' placeholder="Phone" />
                                        {meta.touched && meta.error && <div>{meta.error}</div>}
                                    </div>
                                )}
                            </Field>

                           <Field
                                name="bio"
                                render={({ input, meta }) => (
                                    <div className={style.field}>
                                        <label>Bio</label>
                                        <textarea {...input} />
                                        {meta.touched && meta.error && <div>{meta.error}</div>}
                                    </div>
                                )}
                            />

                           <button type="submit" disabled={submitting}>Submit</button>
                            </div>
                        </form>
                    )}
                />
                </div>

            </div>
        </div>
    )
}

export default News;