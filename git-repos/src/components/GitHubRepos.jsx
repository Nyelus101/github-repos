import React, { useState, useEffect } from 'react';
import RepoDetails from './RepoDetails';

const GitHubRepos = ({ username, selectedRepo, setSelectedRepo }) => {
  const [repos, setRepos] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [totalRepos, setTotalRepos] = useState(0);
  const [page, setPage] = useState(1);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchUserAndRepos = async () => {
      try {
        const userResponse = await fetch(`https://api.github.com/users/${username}`);
        if (!userResponse.ok) {
          throw new Error('User not found. Please check your network, input for correctness and spelling.');
        }
        const userData = await userResponse.json();
        const firstName = userData.name ? userData.name.split(' ')[0] : '';
        setFirstName(firstName);

        const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?page=${page}&per_page=5`);
        if (!reposResponse.ok) {
          throw new Error('Failed to fetch repositories');
        }
        const reposData = await reposResponse.json();
        setRepos(reposData);
        setErrorMessage('');

        // Fetch total number of public repositories
        const totalReposResponse = await fetch(`https://api.github.com/users/${username}`);
        if (!totalReposResponse.ok) {
          throw new Error('Failed to fetch user data');
        }
        const totalReposData = await totalReposResponse.json();
        setTotalRepos(totalReposData.public_repos);
      } catch (error) {
        console.error('Error fetching data:', error);
        setFirstName('');
        setRepos([]);
        setErrorMessage(error.message);
      }
    };

    if (username) {
      fetchUserAndRepos();
    }
  }, [username, page]);

  const nextPage = () => {
    if (page <= totalPages) {
      setPage(page + 1);
    }
  };

  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const showRepoDetails = (repo) => {
    setSelectedRepo(repo);
  };

  const totalPages = Math.ceil(totalRepos / 5); // Assuming 5 repos per page

  return (
    <div className="container mx-auto mt-8">
      <div>
        <h1 className="text-3xl font-bold mb-4">{firstName}'s GitHub Repositories</h1>
        <h4 className="text-xl font-semibold mb-4">Total of {totalRepos} public repositories</h4>
        {errorMessage && (
          <div className="text-red-500 mb-4">{errorMessage}</div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Repositories</h2>
            <ul className='sm-bg-gray-400' >
              {repos.map(repo => (
                <li key={repo.id} className="mb-4">
                  <button onClick={() => showRepoDetails(repo)} className="block w-full bg-gradient-to-r from-gray-600 to-gray-800 hover:bg-gradient-to-r hover:from-gray-900 hover:to-gray-800 text-white font-semibold py-2 px-4 rounded shadow-md transition duration-300 ease-in-out transform lg:hover:scale-105">
                    {repo.name}
                  </button>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex justify-between">
              <button onClick={prevPage} disabled={page === 1} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded mr-2">Previous</button>
              <button onClick={nextPage} disabled={page === totalPages} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded">Next</button>
            </div>
          </div>
          <div className="bg-white p-6 rounded-md shadow-lg">
            {selectedRepo ? (
              <RepoDetails repo={selectedRepo} />
            ) : (
              <p className="text-gray-600">Select a repository to view details</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GitHubRepos;





























// import React, { useState, useEffect } from 'react';
// import RepoDetails from './RepoDetails';

// const GitHubRepos = ({ username, selectedRepo, setSelectedRepo }) => {
//   const [repos, setRepos] = useState([]);
//   const [firstName, setFirstName] = useState('');
//   const [page, setPage] = useState(1);
  
//   const [errorMessage, setErrorMessage] = useState('');

//   useEffect(() => {
//     const fetchUserAndRepos = async () => {
//       try {
//         const userResponse = await fetch(`https://api.github.com/users/${username}`);
//         if (!userResponse.ok) {
//           throw new Error('User not found. Please check your input for correctness and spelling.');
//         }
//         const userData = await userResponse.json();
//         // Extract the first name from the full name
//         const firstName = userData.name ? userData.name.split(' ')[0] : '';
//         setFirstName(firstName);

//         const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?page=${page}&per_page=5`);
//         if (!reposResponse.ok) {
//           throw new Error('Failed to fetch repositories');
//         }
//         const reposData = await reposResponse.json();
//         setRepos(reposData);
//         setErrorMessage(''); // Clear any previous error message if successful
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         setFirstName(''); // Clearing first name in case of error
//         setRepos([]); // Clearing repos in case of error
//         setErrorMessage(error.message);
//       }
//     };

//     if (username) {
//       fetchUserAndRepos();
//     }
//   }, [username, page]);

//   const nextPage = () => {
//     setPage(page + 1);
//   };

//   const prevPage = () => {
//     if (page > 1) {
//       setPage(page - 1);
//     }
//   };

//   const showRepoDetails = (repo) => {
//     setSelectedRepo(repo);
//   };

//   return (
//     <div className="container mx-auto mt-8">
//       <div>
//         <h1 className="text-3xl font-bold mb-4">{firstName}'s GitHub Repositories</h1>
//         {errorMessage && (
//           <div className="text-red-500 mb-4">{errorMessage}</div>
//         )}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           <div>
//             <h2 className="text-2xl font-bold mb-4">Repositories</h2>
//             <ul>
//               {repos.map(repo => (
//                 <li key={repo.id} className="mb-4">
//                   <button onClick={() => showRepoDetails(repo)} className="block w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded shadow-md transition duration-300 ease-in-out transform lg:hover:scale-105">
//                     {repo.name}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//             <div className="mt-4">
//               <button onClick={prevPage} disabled={page === 1} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded mr-2">Previous</button>
//               <button onClick={nextPage} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded">Next</button>
//             </div>
//           </div>
//           <div className="bg-white p-6 rounded-md shadow-md">
//             {selectedRepo ? (
//               <RepoDetails repo={selectedRepo} />
//             ) : (
//               <p className="text-gray-600">Select a repository to view details</p>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GitHubRepos;
