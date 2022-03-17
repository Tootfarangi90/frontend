import { useState } from 'react';
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


    if(data.status === 'ok') {
        window.location.href = '/login'
        console.log(data.status)
    } 
  
  }


  return (

  <div className="form-box">
    <h1>Register</h1>

      <form onSubmit={registerUser}>
        <label htmlFor="firstname">First Name</label><small className="text-muted form-text"><em>*</em></small><br></br>
            <input
                type      ="text"
                id        ="firstname"
                name      ="firstname"
                value     ={firstname.trim()}
                pattern   ='.{1,}'
                onChange  ={firstnameChanged}
                
        />
        <br></br>

        <label htmlFor="lastname">Last Name</label> <small className="text-muted form-text"><em>*</em></small><br></br>
            <input
                type      ="text"
                id        ="lastname"
                name      ="lastname"
                value     ={lastname.trim()}
                pattern   ='.{1,}'
                onChange  ={lastnameChanged}
            /> <br></br>

               
        <label htmlFor="email">Email</label> <smallest className="text-muted form-text"><em>*</em></smallest><br></br>
            <input
                type="email"
                id="email"
                name="email"
                value={email.trim()}
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                onChange={emailChanged}
                /> 
                <br></br>
    
  

        <label htmlFor="password">Password</label> <small className="text-muted form-text"><em>*</em></small><br></br>
            <input
                type="password"
                id="password"
                name="password"
                value={password}
                pattern=".{3,}"
                onChange={passwordChanged}
            /> <br></br><small><em> Enter 3 or more characters</em></small><br></br>

        <input type="submit" id="submitbtn" value="Register" />
      </form>
      <Link className='logreg' to="/login"><em>Already have an account!</em></Link>

  </div>
  )
}


