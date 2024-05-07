// RepositoryDetail.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const RepoDetail = () => {
  const { repoName } = useParams();
  const [repo, setRepo] = useState(null);

  useEffect(() => {
    // Fetch repository details using GitHub API based on repoName
    // Update repo state
  }, [repoName]);

  return (
    <div>
      {repo ? (
        <div>
          <h1 className="text-3xl font-bold mb-4">{repo.name}</h1>
          {/* Render repository details */}
          <p>Description: {repo.description}</p>
          <p>Stars: {repo.stargazers_count}</p>
          {/* Additional repository information */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default RepoDetail;
