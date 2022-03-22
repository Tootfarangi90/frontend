// import React from "react";
// import { useForm, useFormState } from "react-hook-form";
// import { useEffect } from "react";


// export default function RegUser(){
//     const UserForm = (props) => {
//         const initialFormState = { id: null, firstname: '', lastname: '', email: "", password: ""};
//         const { register, errors, handleSubmit, setValue } = useForm({
//           defaultValues: props.user ? props.user : initialFormState,
//         });
//     }
//         setValue('firstname', props.user ? props.user.firstname : '');
//         setValue('lastname', props.user ? props.user.lastname : '');
//         setValue('email', props.user ? props.user.email : '');
//         setValue('password', props.user ? props.user.password : '');
    
//         useEffect(() => {
//             register({ name: "User_Status" }, { required: true })
//           }, [])

//           return (
//             <form onSubmit={handleSubmit(onSubmit)}>
     
//             <input name="firstname" defaultValue="" {...register("firstname", { onChange: (e) => setValue(e.target.value), required: true} )} />
//             {errors.firstname && <small><em>{errors.firstname.message}</em></small>}
            
//             <input name="lastname" defaultValue="" 
//             {...register('lastname')} />
//              {errors.lastname && <small><em>{errors.lastname.message}</em></small>}
            
//             <input name="email" defaultValue="" 
//             {...register('email',{ required: true, 
//                                    unique: true,
//                                  } )} />
//                  {errors.email && <small><em>{errors.email.message}</em></small>}
      
//             <input name="password" type="password" defaultValue="" {...register('password',{ required: true } )} />
//                   {errors.password && <small htmlFor="password"><em>{errors.password.message}</em></small>}
      
            
//             <input type="submit" />
//           </form>

//           )
// }