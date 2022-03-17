import { useState } from 'react';
import { Link } from 'react-router-dom';



export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const passwordChanged     = e => setPassword(e.target.value)
  const emailChanged        = e => setEmail(e.target.value)


  async function loginUser(e) {
    e.preventDefault()
    const res = await fetch('http://localhost:4000/api/login', {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password
      })
    })
    const data = await res.json()
    if(data.user){
      localStorage.setItem('token', data.user)
      window.location.href = '/profile'
    }else{
      alert('please check your username and password')
    }
    console.log(data)
  }

  return (

  <div>
    <h1>Login</h1>

      <form onSubmit={loginUser}>
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

        <input type="submit" value="Login" />
      </form>
       <Link className='logreg' to="/register"><em>Not registered?</em></Link>

  </div>
  )
}
