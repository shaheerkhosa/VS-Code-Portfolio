import React from "react";

function GithubActivity() {
  return (
    <div className="mt-6">
      <h2 className="text-2xl font-semibold mb-4">GitHub Contributions</h2>
      <img
        src="https://github-contributions.vercel.app/api?username=shaheerkhosa"
        alt="GitHub Contribution Graph"
        className="w-full"
      />
    </div>
  );
}

export default  GithubActivity;
