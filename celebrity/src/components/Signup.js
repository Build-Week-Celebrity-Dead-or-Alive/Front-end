import React, { useState } from 'react'
import Button from './Button'
import styled from 'styled-components';

const StyledSignup = styled.div`
  background: #c21500; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #c21500, #ffc500); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #c21500, #ffc500); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  width: 100vw;
  height: 100vh;
`;

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
    <StyledSignup>
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
    </StyledSignup>
  )
}

export default SignupScreen