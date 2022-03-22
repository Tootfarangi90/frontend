import React from "react";
import { useForm, useFormState } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect } from "react";



const regSchema = yup.object().shape({
    firstname: yup
    .string()
    .required(),

    lastname: yup
    .string()
    .required(),

    email: yup
    .string()
    .email()
    .required(),

    password: yup
    .string()
    .min(4)
    .max(8)
    .required()
})


export default function FormReg() {
    const { 
        register, 
        handleSubmit, 
        setValue, 
        getFieldState, 
        formState: { isDirty, isValid, errors },  reset 
    } = useForm({
        mode: 'onChange',
        resolver: yupResolver(regSchema),
        defaultValues:{
        firstname: "",
        lastname: "",
        email: "",
        password: ""
        },
    });
    useEffect(()=>{
        document.title = document.title + " | Form"
        })

        const firstname     = getFieldState('firstname')
        const lastname      = getFieldState('lastname')
        const email         = getFieldState('email')
        const password      = getFieldState('password')

   async function onSubmit() {
    const res = await fetch('http://localhost:4000/api/register', {
        method: 'POST',
        headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstname: setValue('firstname'),
        lastname: setValue('lastname'),
        email: setValue('email'),
        password: setValue('password')
    })
})
const data = await res.json()

    
    console.log(data)
    if(data.status === 'ok') {
      alert('Welcome to the Double-T Productions gang!')
      window.location.href = '/login'
        } 
        console.log(data);
        reset() 
   }
           
    
    

  return (

    <form onSubmit={handleSubmit(onSubmit)}>
     
      <input name="firstname" defaultValue="" {...register("firstname", { onChange: (e) => setValue(e.target.value), required: true} )} />
      {errors.firstname && <small><em>{errors.firstname.message}</em></small>}
      
      <input name="lastname" defaultValue="" 
      {...register('lastname')} />
       {errors.lastname && <small><em>{errors.lastname.message}</em></small>}
      
      <input name="email" defaultValue="" 
      {...register('email',{ required: true, 
                             unique: true,
                           } )} />
           {errors.email && <small><em>{errors.email.message}</em></small>}

      <input name="password" type="password" defaultValue="" {...register('password',{ required: true } )} />
            {errors.password && <small htmlFor="password"><em>{errors.password.message}</em></small>}

      
      <input type="submit" />
    </form>
  );
}