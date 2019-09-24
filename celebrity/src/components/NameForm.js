import React, { useState } from 'react'



const NameForm = (props) => {
    const [playerName, setPlayerName] = useState('')
  
    const handleChange = (e) => {
      setPlayerName(e.target.value)
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

    