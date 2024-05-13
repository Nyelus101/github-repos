import React from 'react';

const Navbar = ({ setUsername, selectedRepo, setSelectedRepo }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const newUsername = e.target.elements.username.value.trim();
    setUsername(newUsername);
    setSelectedRepo(null);
  };

  return (
    <div className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white">Navbar</div>
        <form onSubmit={handleSubmit} className="flex">
          <input
            type="text"
            name="username"
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
