// RepositoriesList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const RepoList = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    // Fetch repositories using GitHub API
    // Update repos state
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">My GitHub Repositories</h1>
      {/* Repository list rendering */}
      {repos.map(repo => (
        <div key={repo.id} className="mb-4">
          <Link to={`/repositories/${repo.name}`} className="text-blue-600 hover:underline">
            {repo.name}
          </Link>
          {/* Additional repository information */}
          <p>Description: {repo.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RepoList;
