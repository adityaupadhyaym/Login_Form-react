import React from 'react';
import { Formik } from 'formik';
import Input from '../Input';
import './style.css';
import '../../utils/text.css'

const  SignUp = () => {
  return (
    <div className="">
      <h2 className='text-center'> Sign-Up </h2>
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={values => {
          const errors = {};
          if(values.user.length < 3) {
            errors.user = "User name can't be less than 3"
          } else if(values.user.length > 15 ) {
            errors.user = "User name can't be greater than 15"
          }
          if (!values.email) {
            errors.email = 'Email is required !';
          } else if (
            !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          if (!values.password) {
            errors.password = 'Password is required !';
          } else if (values.password.length < 6 ) {
            errors.password = "Password can't be less than 6";
          } else if (values.password.length > 15) {
            errors.password = "Password can't be more than 15"
          }
          if(values.password !== values.password2){
            errors.password2 = "Please enter correct password !"
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
             <div className='nameHolder form-control'>
              <label htmlFor='user' id='user-label'> User Name </label>
            <input
              id="user"
              placeholder=' '
              type="text"
              name="user"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.user}
            />
            {errors.user && touched.user && <small> {errors.user}</small>}
            </div>
            <div className='emailHolder form-control'>
              <label htmlFor='email' id='email-label'> Email </label>
            <input
              id="email"
              placeholder=' '
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email && <small> {errors.email}</small>}
            </div>

          <div className='passwordHolder form-control'>
            <label htmlFor='password' id='password-label'> Password</label>
              <input
              id='password'
              placeholder=' '
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            </div>
            {errors.password && touched.password && <small> {errors.password} </small>}

            <div className='passwordHolder form-control'>
            <label htmlFor='password2' id='password2-label'> Verify  Password</label>
              <input
              id='password2'
              placeholder=' '
              type="password"
              name="password2"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password2}
            />
            </div>
            {errors.password2 && touched.password2 && <small> {errors.password2} </small>}
            <button type="submit" disabled={isSubmitting} id="btn">
             Submit 
            </button>
           
          </form>
        )}
      </Formik>
      <Input />
      

    </div>
 

  
  );
}

export default SignUp;
