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
    }