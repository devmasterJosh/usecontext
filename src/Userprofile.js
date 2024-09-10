import React, { useContext } from 'react'
import { UserContext } from './context/UserContext';  // Import the UserContext


function Userprofile() {
    const {username} = useContext( UserContext)
  return (
    <div>
        <h1>Welcome, {username}!</h1>  {/* Display the current username */}
        <p>Set your username below:</p>
    </div>
  )
}

export default Userprofile
