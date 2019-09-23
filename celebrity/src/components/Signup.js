import React, { useState } from 'react'
import Button from './Button'

const SignupScreen = () => {
  const [signUp, setsignUp] = useState({
    username: '',
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    setsignUp({ ...signUp, [e.target.name]: e.target.value })
  }

  window.localStorage.setItem('SignUpCred', signUp.username)

  return (
    <div className='signup-screen'>
      <form>
        <label htmlFor='username'>
          Name
          <input
            placeholder='username'
            value={signUp.username}
            name='username'
            onChange={handleChange}
          />
        </label>
        <label htmlFor='email'>
          Email
          <input
            type='email'
            placeholder='email'
            value={signUp.email}
            name='email'
            onChange={handleChange}
          />
        </label>
        <label htmlFor='password'>
          Password
          <input
            type='password'
            placeholder='password'
            value={signUp.password}
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