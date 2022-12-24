import React from 'react'

const TestUserInteractions = () => {
  return (
    <div>
        <input placeholder='Enter name'/>
        <input placeholder='Enter description'/>

        <label htmlFor='password'> Enter password</label>
        <input type='password' id='password'/>
        
        <button> Submit </button>
        <button> Apply</button>
    </div>
  )
}

export default TestUserInteractions