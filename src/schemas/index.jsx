import *as Yup from 'yup'

export const signUpSchema=Yup.object({
name: Yup.string().min(2).max(25).required('please enter your name '),
email:Yup.string().email().required('please enter your email '),
password:Yup.string().min(6).required('please enter your password '),
confirm_password:Yup.string().oneOf([Yup.ref('password'),null] ,'Password must match').required('please enter confirm password'),
});