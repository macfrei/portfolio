import { Octokit } from 'octokit';

const octokit = new Octokit({
  auth: process.env.GITHUB_ACCESS_TOKEN,
});

async function handler(request, response) {
  const { repoName, size } = request.body;

  if (size === 0) {
    response.status(200).json({ repoName, commits: [] });
  }

  const commits = await octokit.request(
    `GET /repos/macfrei/${repoName}/commits`,
    {
      headers: {
        'X-GitHub-Api-Version': '2022-11-28',
      },
      per_page: 100,
    }
  );

  response.status(200).json({ repoName, commits: commits.data });
}

export default handler;
