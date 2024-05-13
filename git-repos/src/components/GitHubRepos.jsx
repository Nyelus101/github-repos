import React, { useState, useEffect } from 'react';
import RepoDetails from './RepoDetails';

const GitHubRepos = () => {
  const [repos, setRepos] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [page, setPage] = useState(1);
  const [selectedRepo, setSelectedRepo] = useState(null);

  useEffect(() => {
    const fetchUserAndRepos = async () => {
      try {
        const userResponse = await fetch(`https://api.github.com/users/Nyelus101`);
        if (!userResponse.ok) {
          throw new Error('Failed to fetch user');
        }
        const userData = await userResponse.json();
        // Extract the first name from the full name
        const firstName = userData.name ? userData.name.split(' ')[0] : '';
        setFirstName(firstName);

        const reposResponse = await fetch(`https://api.github.com/users/Nyelus101/repos?page=${page}&per_page=5`);
        if (!reposResponse.ok) {
          throw new Error('Failed to fetch repositories');
        }
        const reposData = await reposResponse.json();
        setRepos(reposData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchUserAndRepos();
  }, [page]);

  const nextPage = () => {
    setPage(page + 1);
  };

  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const showRepoDetails = (repo) => {
    setSelectedRepo(repo);
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">{firstName}'s GitHub Repositories</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Repositories</h2>
          <ul>
            {repos.map(repo => (
              <li key={repo.id} className="mb-4">
                <button onClick={() => showRepoDetails(repo)} className="block w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded shadow-md transition duration-300 ease-in-out transform hover:scale-105">
                  {repo.name}
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <button onClick={prevPage} disabled={page === 1} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded mr-2">Previous</button>
            <button onClick={nextPage} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded">Next</button>
          </div>
        </div>
        <div className="bg-white p-6 rounded-md shadow-md">
          {selectedRepo ? (
            <RepoDetails repo={selectedRepo} />
          ) : (
            <p className="text-gray-600">Select a repository to view details</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default GitHubRepos;






























// import React, { useState, useEffect } from 'react';

// const GitHubRepos = () => {
//   const [repos, setRepos] = useState([]);
//   const [page, setPage] = useState(1);
//   const [selectedRepo, setSelectedRepo] = useState(null);

//   useEffect(() => {
//     const fetchRepos = async () => {
//       try {
//         const response = await fetch(`https://api.github.com/users/Nyelus101/repos?page=${page}&per_page=5`);
//         if (!response.ok) {
//           throw new Error('Failed to fetch repositories');
//         }
//         const data = await response.json();
//         setRepos(data);
//       } catch (error) {
//         console.error('Error fetching repositories:', error);
//       }
//     };

//     fetchRepos();
//   }, [page]);

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
//     <div>
//       <h2>My GitHub Repositories</h2>
//       <ul>
//         {repos.map(repo => (
//           <li key={repo.id}>
//             {repo.name}
//             <button onClick={() => showRepoDetails(repo)}>View Details</button>
//             </li>
//         ))}
//       </ul>
//       <div>
//         <button onClick={prevPage} disabled={page === 1}>Previous</button>
//         <button onClick={nextPage}>Next</button>
//       </div>
//       {selectedRepo && (
//         <RepoDetails repo={selectedRepo} />
//       )}
//     </div>
//   );
// };

// const RepoDetails = ({ repo }) => {
//     return (
//       <div>
//         <h2>{repo.name}</h2>
//         <p>Description: {repo.description}</p>
//         <p>Language: {repo.language}</p>
//         <p>Stars: {repo.stargazers_count}</p>
//         <p>URL: <a href={repo.html_url}>{repo.html_url}</a></p>
//       </div>
//     );
//   };

// export default GitHubRepos;
