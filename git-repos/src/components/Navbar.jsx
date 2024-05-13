import React, { useState } from 'react';

const Navbar = () => {
  const [username, setUsername] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle submission, e.g., save to state or perform an action
    console.log("Username submitted:", username);
  };

  return (
    <div className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white">Navbar</div>
        <form onSubmit={handleSubmit} className="flex">
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
            className="px-4 py-2 mr-2 rounded-lg bg-gray-700 text-white focus:outline-none"
            placeholder="Enter username"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg text-white"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Navbar;
