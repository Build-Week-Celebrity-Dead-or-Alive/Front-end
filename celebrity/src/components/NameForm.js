import React, { useState } from 'react'
import axios from 'axios'


const NameForm = (props) => {
    const [playerName, setPlayerName] = useState('')
    const [newPlayer, setNewPlayer] = useState('')
    const handleChange = (e) => {
      setPlayerName(e.target.value)
    }

const sendScore = async () => {
  try {
    const id = localStorage.getItem('id') || '';
    if(id) {
      await axios
      .put(`https://celebs-dead-or-alive.herokuapp.com/users/:id%E2%80%99-`, {
        player_id: parseInt(id),
        score: props.score
      })
    } else {
 const newPalyer = 
 await
 axios
 .post(`https://celebs-dead-or-alive.herokuapp.com/auth/register`, {
  name: playerName,
  email: `default{Date.now()}@DelayNode.com`,
  password: 'default'
 })
 localStorage.setItem('id', newPlayer.data.id)
 await
 axios
 .post(`https://celebs-dead-or-alive.herokuapp.com/users/:id%E2%80%99-`, {
   player_id: newPalyer.data.id,
   score: props.score
 })
}
  }
  catch  ( error ) {
    alert("Could not save the score")
    console.log('Something did not work', error)
  }
  
}

 const handleSubmit = (e) => {
        e.preventDefault()
        localStorage.setItem('SignUpCred', playerName)
        setPlayerName('')
      }

      return (
        <div className='name-form'>
            <form onSubmit={(e) => handleSubmit(e)}>
              <label htmlFor='firstname'>
                Name
                <input
                  placeholder='Your name'
                  value={playerName}
                  name='firstname'
                  onChange={handleChange}
                />
              </label>
              <button type={'submit'}>SUBMIT</button>
            </form>
        </div>
      )}
    
    export default NameForm

    