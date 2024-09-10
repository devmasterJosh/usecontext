import React, { createContext, useState } from 'react';

// Step 1: Create a UserContext
export const UserContext = createContext();

// Step 2: Create a UserProvider component to manage the username state
export const UserProvider = ({ children }) => {
  const [username, setUsername] = useState('user'); // Default username is 'Guest'

  return (
    // Step 3: Provide the username and the setUsername function to children components
    <UserContext.Provider value={{ username, setUsername }}>
      {children}
    </UserContext.Provider>
  );
};
