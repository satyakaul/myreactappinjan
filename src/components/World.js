import React, { useState } from 'react'

const World = () => {
  const [name, setName] = useState('Guest')
  const [email, setEmail] = useState('Guest@gmail.com')

  const onClickHandler = () => {
    setName('Satya')
    setEmail('satya@gmail.com')
  }

  return (
    <div>
      <h1>Welcome {name}, to state management using functional component</h1>
      <h1>Email: {email}</h1>
      <button class='btn btn-primary btn-lg' onClick={onClickHandler}>
        Login
      </button>
    </div>
  )
}
export default World
