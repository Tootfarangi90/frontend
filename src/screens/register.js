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
    }
    console.log(data)
  }


  return (

  <div>
    <h1>Register</h1>

      <form onSubmit={registerUser}>
        <label htmlFor="firstname">firstname:</label><br></br>
            <input
                type      ="text"
                id        ="firstname"
                name      ="firstname"
                value     ={firstname}
                onChange  ={firstnameChanged}
        /> <br></br>

        <label htmlFor="lastname">Lastname:</label> <br></br>
            <input
                type      ="text"
                id        ="lastname"
                name      ="lastname"
                value     ={lastname}
                onChange  ={lastnameChanged}
            /> <br></br>
               
        <label htmlFor="email">email</label> <br></br>
            <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={emailChanged}
        /> <br></br>

        <label htmlFor="password">password:</label> <br></br>
            <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={passwordChanged}
            /> <br></br>

        <input type="submit" value="Register" />
      </form>
      <Link className='logreg' to="/login"><em>Already have an account!</em></Link>

  </div>
  )
}


