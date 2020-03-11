import React, { useState } from 'react';
import Button from './Button';
import styled from 'styled-components';
import { axiosWithAuth } from '../utils/axiosWithAuth';
const StyledSignup = styled.div`
  background: #c21500; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #c21500, #ffc500); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #c21500, #ffc500); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  width: 100vw;
  height: 100vh;
`;


// const LoginScreen = ({history}) => {
//   const [loginCred, setloginCred] = useState({ Name: '', username: '', password: '' })

//   const handleChange = (e) => {

//     setloginCred({ ...loginCred, [e.target.name]: e.target.value })
//   }

//   window.localStorage.setItem("LoginCred", JSON.stringify(loginCred))



//   const loginScreen = event => {
//     event.preventDefault();
//     axiosWithAuth()
//       .post('/login', loginCred)
//       .then(res => {
//         console.log(res.data);
//         localStorage.setItem('token', res.data.payload);
//         history.push('/NavBar');
//       })
//       .catch(error => console.log(error.response))
//   }






//   return (
//     <StyledSignup>
//     <div className='signup-screen'>
//       <form onSubmit={loginScreen}>
//         <label htmlFor='name'>
//           Name
//           <input
//             placeholder='name'
//             value={loginCred.name}
//             name='name'
//             onChange={handleChange}
//           />
//          </label>
//          <label htmlFor='username'>
//           username
//           <input
//             placeholder='username'
//             value={loginCred.username}
//             name='username'
//             onChange={handleChange}
//           />
//         </label>
//         <label htmlFor='password'>
//           Password
//         <input
//             type='password'
//             placeholder='password'
//             value={loginCred.password}
//             name='password'
//             onChange={handleChange}
//           />
//         </label>
//         <div className='buttons'>



//           <Button type='submit' buttonText={'SUBMIT'} pathName={''} />
//           <Button type='submit' buttonText={'SIGNUP'} pathName={''} />
//         </div>
//       </form>
//     </div>
//     </StyledSignup>
//   )
// }

// export default LoginScreen




        {/* <form action="/button-type"/> 
        <button type="button" onclick="alert('This button does nothing.')">Click me for no reason!</button><br><br> 
        <label for="name">Name</label><br> <input name="name"><br><br> 
        <button type="reset">Reset the form!</button><br><br> 
        <button type="submit" disabled>Submit (disabled)</button> </form> */}
        
        class Login extends React.Component {

          state = {
            credentials: {
              name:'',
              username: '',
              password: ''
            }
          };

          handleChange = e => {
            this.setState({
              credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
              }
            });
          };
        
           login = e => {
            e.preventDefault();
            axiosWithAuth()
              .post(`/login`, this.state.credentials)
              .then(res => {
                console.log(res.data)
                localStorage.setItem('token', res.data.token);
                // redirect to the apps main page?
                this.props.history.push('/protected');
              })
              .catch(err => console.log(err.response));
          };
        
          render() {
            return (
              <StyledSignup>
              <div className='signup-screen'>
                <form>
                <form onSubmit={this.login}>
                <label htmlFor='username'>
                <input
                    type="text"
                    name="name"
                    placeholder='name'
                    value={this.state.credentials.name}
                    onChange={this.handleChange}
                  />
                  </label>
                  <label htmlFor='email'>
                 <input
                    type="text"
                    name="username"
                    placeholder='username'
                    value={this.state.credentials.username}
                    onChange={this.handleChange}
                  />
                  </label>
                  <label htmlFor='password'>
                  <input
                    type="password"
                    name="password"
                    placeholder='password'
                    value={this.state.credentials.password}
                    onChange={this.handleChange}
                  />
                  </label>
                  <button>Log in</button>
                </form>
                </form>
              </div>
              </StyledSignup>
            );
          }
        }
        
        export default Login;




