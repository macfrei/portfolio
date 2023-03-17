import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import About from './components/About';
import Experience from './components/Experience';
import Header from './components/Header';
import Hero from './components/Hero';
import SocialMenu from './components/SocialMenu';

function App() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch('/api/repos')
      .then(response => response.json())
      .then(repos => {
        Promise.all(
          repos.map(repo =>
            fetch('/api/commits', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ repoName: repo.name, size: repo.size }),
            }).then(res => res.json())
          )
        ).then(response => {
          const reposWithCommits = repos.map(repo => {
            const { commits } = response.find(
              commits => commits.repoName === repo.name
            );
            return { ...repo, commits };
          });
          setRepos(reposWithCommits);
        });
      })
      .catch(console.error);
  }, []);

  console.log(repos);

  return (
    <AppContainer>
      <Header />
      <Main>
        <Hero />
        <About />
        <Experience />
      </Main>
      <SocialMenuStyled color="var(--primary-blue)" />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  margin-bottom: 80px;
`;

const SocialMenuStyled = styled(SocialMenu)`
  @media (max-width: 767px) {
    display: none;
  }

  @media (min-width: 767px) {
    display: grid;
    place-content: end;
    gap: 12px;

    padding: 12px 37px;

    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0;
  }
`;

const Main = styled.main`
  display: grid;
  place-content: center;
  gap: 50px;

  @media (max-width: 900px) {
    padding: 0 100px;
  }

  @media (max-width: 768px) {
    padding: 0 50px;
  }

  @media (max-width: 390px) {
    padding: 0 25px;
  }
`;
