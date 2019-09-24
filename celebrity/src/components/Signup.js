import React, { useState } from 'react'
import Button from './Button'

const SignupScreen = () => {
  const [signUpCred, setsignUpCred] = useState({
    username: '',
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    setsignUpCred({ ...signUpCred, [e.target.name]: e.target.value })
  }

  window.localStorage.setItem('SignUpCred', signUpCred.username)

  return (
    <div className='signup-screen'>
        <h1>Dead<br /> Or
        <br /> Alive</h1>
      <form>
        <label htmlFor='username'>
          Name
          <input
            placeholder='username'
            value={signUpCred.username}
            name='username'
            onChange={handleChange}
          />
        </label>
        <label htmlFor='email'>
          Email
          <input
            type='email'
            placeholder='email'
            value={signUpCred.email}
            name='email'
            onChange={handleChange}
          />
        </label>
        <label htmlFor='password'>
          Password
          <input
            type='password'
            placeholder='password'
            value={signUpCred.password}
            name='password'
            onChange={handleChange}
          />
        </label>
        <Button type='submit' buttonText={'SUBMIT'} pathName={''} />
      </form>
    </div>
  )
}

export default SignupScreen