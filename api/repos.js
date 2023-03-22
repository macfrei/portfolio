import { Octokit } from 'octokit';

const octokit = new Octokit({
  auth: process.env.GITHUB_ACCESS_TOKEN,
});

async function handler(request, response) {
  const repos = await octokit.request('GET /user/repos', {
    headers: {
      'X-GitHub-Api-Version': '2022-11-28',
    },
    per_page: 100,
    type: 'owner',
  });

  const repoData = repos.data.map(repo => ({
    name: repo.name,
    url: repo.html_url,
    description: repo.description,
    lastUpdated: repo['updated_at'],
    visibility: repo.visibility,
    size: repo.size,
  }));

  response.status(200).json(repoData);
}

export default handler;
