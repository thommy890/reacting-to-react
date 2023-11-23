import React, { useState, useEffect } from 'react';
import Greeter from './components/Greeter';

function App() {
  const [username, setUsername] = useState('');
  const [loaded, setLoaded] = useState(false);

  // Handler to update the username state
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  // Handler to toggle the loaded state
  const toggleLoaded = () => {
    setLoaded(true);
  };

  // useEffect hook to set up a timer
  useEffect(() => {
    // Check if the loaded state is false
    if (!loaded) {
      const timer = setTimeout(() => {
        // Toggle loaded state to true after 3 seconds
        setLoaded(true);
      }, 3000);

      // Cleanup function to clear the timer
      return () => clearTimeout(timer);
    }
  }, [loaded]); // Dependency array with loaded state

  // Conditional rendering based on the loaded state
  if (!loaded) {
    return (
      <div className="container text-center mt-5">
        <h1 className="mb-3">Website loading ...</h1>
        <button
          className="btn btn-primary"
          onClick={toggleLoaded}>
          Load Website
        </button>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <Greeter phrase="Hello" name="Alice" />
      <Greeter phrase="Good day" name="Bob" />
      <Greeter phrase="Welcome" name="Charlie" />

      <input
        className="form-control my-3"
        type="text"
        value={username}
        onChange={handleUsernameChange}
      />

      <p className="lead">You are logging in as: {username}</p>
    </div>
  );
}

export default App;