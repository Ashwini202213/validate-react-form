import React from 'react'
import './registration.css'
import {useFormik} from 'formik'
import { signUpSchema } from '../../schemas';

function Registration() {

const initialValues={
  name:'',
  email:'',
  password:'',
  confirm_password:'',
}

const {values,errors,handleBlur,touched,handleChange,handleSubmit}= useFormik({

  initialValues:initialValues,
  validationSchema:signUpSchema, //this is validation created by using yup and located in schema folder
  onSubmit:(values,action)=>{
  console.log('values',values);
  // for reseting form 
   action.resetForm();
  }

});
// console.log('Formik', Formik);

console.log(errors);  //will get errors like name is required...



  return (

    
    <div className="main-container">
    <div className="container">
    <div className="form-heading">
    <h1>Join LearnVern Today</h1>
      <h3>Start Learning New Skills & Technologies Now</h3>
      <p>Fill out the form below to create your account and begin your journey.</p>
    </div>
    <form onSubmit={handleSubmit}>
        <div className='input-field'>
        <label htmlFor="name">Name:</label>
        <input
         type="text"
          name="name" 
          id="name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder='Enter Name please...' />
        </div>

{/* for handling error messages only when we click the field */}

        {errors.name && touched.name ? (<p style={{color:'red'}}>{errors.name}</p>
        ):null}
        
        <div className='input-field'>
        <label htmlFor="email">Email:</label>
        <input
         type="text"
          name="email" 
          id="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder='Enter email please...' />
        </div>

        {errors.email && touched.email ? (<p style={{color:'red'}}>{errors.email}</p>
        ):null}
        

        <div className='input-field'>
        <label htmlFor="password">password:</label>
        <input
         type="password"
          name="password" 
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          id="password"
          placeholder='Enter password please...' />
        </div>
        {errors.password && touched.password ? (<p style={{color:'red'}}>{errors.password}</p>
        ):null}
        


        <div  className='input-field'>
        <label htmlFor="password">Confirm password:</label>
        <input
         type="password"
          name="confirm_password" 
          id="confirm_password"
          value={values.confirm_password}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder='confirm password please...' />
        </div>

        {errors.confirm_password && touched.confirm_password ? (<p style={{color:'red'}}>{errors.confirm_password}</p>
        ):null}
        

      <div className='submit-button'>
      <a href="#">want to register using Gmail ? </a>
      <button type='submit'>Register</button>
      </div>
    </form>    
    <p>Already have an account ? <a href="">Sign in</a></p>
    </div>


</div>
   
  )
}

export default Registration