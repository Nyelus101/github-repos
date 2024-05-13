import React, { useState } from 'react';
import GitHubRepos from './components/GitHubRepos';
import Navbar from './components/Navbar';

const App = () => {
  const [username, setUsername] = useState('');
  const [selectedRepo, setSelectedRepo] = useState(null);

  const handleUsernameChange = (newUsername) => {
    setUsername(newUsername);
  };

  return (
    <>
      <Navbar setUsername={handleUsernameChange} setSelectedRepo={setSelectedRepo} />
      {username ? <GitHubRepos username={username} selectedRepo={selectedRepo} setSelectedRepo={setSelectedRepo} /> : <div className='container mx-auto mt-8 text-3xl font-bold mb-4 flex justify-center items-center h-full' >To view any github repo, kindly input the correct Git's username!</div> }
    </>
  );
};

export default App;
