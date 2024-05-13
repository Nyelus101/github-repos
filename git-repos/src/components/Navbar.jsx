import React from 'react';

const Navbar = ({ setUsername, selectedRepo, setSelectedRepo }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const newUsername = e.target.elements.username.value.trim();
    setUsername(newUsername);
    setSelectedRepo(null);
  };

  return (
    <div className="bg-gray-800 py-6 md:py-4">
      <div className="container mx-auto flex justify-between items-center px-2">
        <div className="text-white text-lg md:text-lg">NeduSite</div>
        <form onSubmit={handleSubmit} className="flex">
          <input
            type="text"
            name="username"
            className="px-2 py-1 md:px-4 md:py-2 mr-2 rounded-lg bg-gray-700 text-white text-sm md:text-base focus:outline-none"
            placeholder="Enter username"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 px-2 py-1 md:px-4 md:py-2 rounded-lg text-white text-sm md:text-base"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Navbar;
