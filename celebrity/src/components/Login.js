import React, { useState } from 'react'
import Button from './Button'
import axios from 'axios';
const LoginScreen = (props) => {
  const [loginCred, setloginCred] = useState({ Name: '', password: '' })
  const [errorMessage, setErrorMessage] = useState('');


  const login = e => {
    e.preventDefault();
    axios
        .post('https://celebs-dead-or-alive.herokuapp.com/auth/login', loginCred)
        .then(res => {
            console.log(res)
            localStorage.setItem('token', res.data.token)
            setErrorMessage('')
            props.history.push('/add_item')
        })
        .catch(err => {
            console.log(typeof err.message)
            setErrorMessage(err.message)
        })
}










  const handleChange = (e) => {

    setloginCred({ ...loginCred, [e.target.name]: e.target.value })
  }

  window.localStorage.setItem("LoginCred", JSON.stringify(loginCred))

  return (
    <div className='login-screen'>
      <form onSubmit={login}>
        <label htmlFor='Name'>
          Name
          <input
            placeholder='Name'
            value={loginCred.name}
            name='name'
            onChange={handleChange}
          />
        </label>
        <label htmlFor='password'>
          Password
        <input
            type='password'
            placeholder='password'
            value={loginCred.password}
            name='password'
            onChange={handleChange}
          />
        </label>
        <div className='buttons'>
          <Button type='submit' buttonText={'SUBMIT'} pathName={''} />
          <Button type='submit' buttonText={'SIGNUP'} pathName={'signup'} />
        </div>
      </form>
    </div>
  )
}

export default LoginScreen