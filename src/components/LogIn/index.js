import React from 'react';
import { Formik } from 'formik';
import Input from '../Input';
import './style.css';
import '../../utils/text.css';

const LogIn = () => {

  return (
    <div className="">
      <h2 className='text-center'> Please Login</h2>
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={values => {
          const errors = {};
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
            <button type="submit" disabled={isSubmitting} id="btn">
              Login
            </button>
            
          </form>
        )}
      </Formik>
      <Input />
      

    </div>
  );
}

export default LogIn;
