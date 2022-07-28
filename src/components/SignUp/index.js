import React from 'react';
import { Formik } from 'formik';
import './style.css';


const  SignUp = () => {
  return (
    <div className='signup'>
      <h2 className='text-center'> Sign-Up </h2>
      <Formik
        initialValues={{ user : '',  email: '', password: '' , password2 : ''}}
        validate={values => {
          const errors = {};
          if(values.user.length < 3) {
            errors.user = "User name can't be less than 3"
          } else if(values.user.length > 15 ) {
            errors.user = "User name can't be greater than 15"
          } else if (!/^[a-zA-Z\-]+$/.test(values.user)) {
            errors.user = "Invaild user name !"
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

          
          if(values.password !== values.password2){
            errors.password2 = "Password doesn't match !"
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
              <label htmlFor='user' className='label'> User Name </label>
            <input
              id="user"
              placeholder=' '
              type="text"
              name="user"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.user}
            />
            {errors.user && touched.user && <small className='error'> {errors.user}</small>}
            </div>
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

            <div className='form-control'>
            <label htmlFor='password2'className='label'> Verify  Password</label>
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
            {errors.password2 && touched.password2 && <small className='error'> {errors.password2} </small>}
            <button type="submit" disabled={isSubmitting} className="btn">
             Submit 
            </button>
           
          </form>
        )}
      </Formik>
      
      

    </div>
 

  
  );
}

export default SignUp;
