import React, { useState } from 'react';
import Button from './Button';
import styled from 'styled-components';

const StyledSignup = styled.div`
  background: #c21500; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #c21500, #ffc500); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #c21500, #ffc500); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  width: 100vw;
  height: 100vh;
`;


const LoginScreen = () => {
  const [loginCred, setloginCred] = useState({ email: '', password: '' })

  const handleChange = (e) => {

    setloginCred({ ...loginCred, [e.target.name]: e.target.value })
  }

  window.localStorage.setItem("LoginCred", JSON.stringify(loginCred))

  return (
    <StyledSignup>
    <div className='signup-screen'>
      <form>
        <label htmlFor='email'>
          Email
          <input
            placeholder='email'
            value={loginCred.email}
            name='email'
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
    </StyledSignup>
  )
}

export default LoginScreen