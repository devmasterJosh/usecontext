import React, { useContext, useState } from "react";
import { UserContext } from "./context/UserContext"; // Import the UserContext

const UsernameInput = () => {
  const { setUsername } = useContext(UserContext); // Get the setUsername function from context
  const [input, setInput] = useState(""); // Local state to store the input value

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    setUsername(input); // Set the new username in the context
    setInput(""); // Clear the input field
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your username"
        value={input}
        onChange={(e) => setInput(e.target.value)} // Update the input state on change
      />
      <button type="submit">Set Username</button>
    </form>
  );
};

export default UsernameInput;
