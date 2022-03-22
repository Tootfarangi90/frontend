import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';




export default function Register() {
  

  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
 

 
  const firstnameChanged    = e => setFirstname(e.target.value)
  const lastnameChanged     = e => setLastname(e.target.value)
  const passwordChanged     = e => setPassword(e.target.value)
  const emailChanged        = e => setEmail(e.target.value)
 
  useEffect(()=>{
  document.title = " | Register"

  })


  async function registerUser(e) {
    e.preventDefault()
    const res = await fetch('http://localhost:4000/api/register', {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstname,
        lastname,
        email,
        password
      })
    })
    const data = await res.json()
    
    console.log(data)
    if(data.status === 'ok') {
      alert('Welcome to the Double-T Productions gang!')
      window.location.href = '/login'
        } 

    }
  
  return (

  <div className="form-box">
    <h1>Register</h1>

      <form onSubmit={registerUser}>
      
        <label htmlFor="firstname">First Name</label><br></br>
            <input 
                
                type      ="text"
                id        ="firstname"
                name      ="firstname"
                value     ={firstname.trim()}
                pattern   ='.{3,}'
                onChange  ={firstnameChanged}
                
        />
        <br></br><small ><em>This field is required</em></small> <br></br>

        <label htmlFor="lastname">Last Name</label> <br></br>
            <input 
                type      ="text"
                id        ="lastname"
                name      ="lastname"
                value     ={lastname.trim()}
                pattern   ='.{3,}'
                onChange  ={lastnameChanged}
            /> <br></br><small><em>This field is required</em></small> <br></br>

               
        <label htmlFor="email">Email</label> <br></br>
            <input
                type      ="email"
                id        ="email"
                name      ="email"
                value     ={email.trim()}
                pattern   ="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                onChange  ={emailChanged}
                /> 
                <br></br><small><em>Email is required</em></small> <br></br>
    
  

        <label htmlFor="password">Password</label> <br></br>
            <input 
                type        ="password"
                id          ="password"
                name        ="password"
                value       ={password}
                pattern     =".{4,}"
                placeholder ='Enter 4 or more characters'
                onChange    ={passwordChanged}
            /> <br></br><small><em>This field is required</em></small><br></br>

        <input type="submit" id="submitbtn" value="Register" />
      </form>
      <Link className='logreg' to="/login"><em>Already have an account!</em></Link>

  </div>
  )
}


