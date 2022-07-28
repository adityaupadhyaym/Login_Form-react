import React from 'react';
import { Formik } from 'formik';
import './style.css';


const LogIn = () => {

  return (
    <div className='login'>
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
          } else if (values.password.length < 8 ) {
            errors.password = "Password can't be less than 8";
          } else if (values.password.length > 32) {
            errors.password = "Password can't be more than 32"
          }  else if (values.password.search(/[a-z]/) < 0)  {
            errors.password = "Please include at least a lowercase letter !"
          }  else if (values.password.search(/[A-Z]/) < 0)  {
            errors.password = "Please include at least an Uppercase letter !"
          } else if (values.password.search(/[!@#\$%\^&\*_]/) < 0)  {
            errors.password = "Please include at least a special letter !"
          }  else if (values.password.search(/[0-9]/) < 0) {
            errors.password = "Please include at least a number !"
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
            <div className='form-control'>
              <label htmlFor='email' className='label'> Email </label>
            <input
              id="email"
              placeholder=' '
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email && <small className='error'> {errors.email}</small>}
            </div>

          <div className='form-control'>
            <label htmlFor='password' className='label'> Password</label>
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
            {errors.password && touched.password && <small className='error'> {errors.password} </small>}
            <button type="submit" disabled={isSubmitting} class="btn">
              Login
            </button>
            
          </form>
        )}
      </Formik>
     
      

    </div>
  );
}

export default LogIn;
