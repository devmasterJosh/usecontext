import React, { useContext } from "react";
import UsernameInput from "./UsernameInput"; // Import the UsernameInput component
import Userprofile from "./Userprofile";

const App = () => {
  return (
    <div>
      <UsernameInput />
      <Userprofile />
    </div>
  );
};

export default App;
