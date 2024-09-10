import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { UserProvider } from './context/UserContext';  // Import the UserProvider

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Step 4: Wrap App with UserProvider */}
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>
);
