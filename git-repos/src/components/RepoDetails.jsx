import React from 'react';

const RepoDetails = ({ repo }) => {
  // Parse the creation date
  const creationDate = new Date(repo.created_at);
  // Format the date as 'Month Day, Year'
  const formattedCreationDate = creationDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">{repo.name}</h2>
      <p className="text-gray-800 mb-2"><span className="font-semibold">Description:</span> {repo.description || 'No description'}</p>
      <p className="text-gray-800 mb-2"><span className="font-semibold">Language:</span> {repo.language || 'N/A'}</p>
      <p className="text-gray-800 mb-2"><span className="font-semibold">Stars:</span> {repo.stargazers_count}</p>
      <p className="text-gray-800 mb-2"><span className="font-semibold">URL:</span> <a href={repo.html_url} className="text-blue-500 hover:underline">{repo.html_url}</a></p>
      <p className="text-gray-800 mb-2"><span className="font-semibold">Created:</span> {formattedCreationDate}</p>
    </div>
  );
};

export default RepoDetails;
