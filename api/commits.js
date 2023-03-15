import { Octokit } from 'octokit';

const octokit = new Octokit({
  auth: process.env.GITHUB_ACCESS_TOKEN,
});

async function handler(request, response) {
  const { repoName } = request.body;

  const commits = await octokit.request(
    `GET /repos/macfrei/${repoName}/commits`,
    {
      headers: {
        'X-GitHub-Api-Version': '2022-11-28',
      },
      per_page: 100,
    }
  );
  console.log(repoName, commits.data.length);

  response.status(200).json(commits.data);
}

export default handler;
