import React from "react";

function RepoResult({ repos }) {
  //   console.log(repos.data);

  const listRepos =
    repos.length !== 0 ? (
      repos.data.map((item) => <li type="1">{item.name}</li>)
    ) : (
      <li>No repo found</li>
    );

  return (
    <div>
      <h1 className="mt-5 container">Repositories</h1>
      <span className="mt-5 container">{listRepos}</span>
    </div>
  );
}

export default RepoResult;
