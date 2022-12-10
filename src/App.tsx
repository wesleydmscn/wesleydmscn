import { useState } from 'react';
import { Links } from './components/Links';
import './styles/global.css';

export const App = () => {
  const [avatar, setAvatar] = useState('');
  const getGitHubProfile = async () => {
    const response = await fetch('https://api.github.com/users/wesleydmscn');
    const data = await response.json();

    setAvatar(data.avatar_url);
  }

  getGitHubProfile();

  return (
    <div className='sm:text-sm md:text-base w-screen h-screen bg-blue-dark grid place-items-center'>
      <main className='m-8 grid gap-y-6 text-white'>
        <header className='flex flex-wrap gap-6'>
          <img 
            className='w-16 h-16 border-2 border-blue rounded-full' 
            src={avatar}
            alt="Profile Avatar"
          />

          <div>
            <h1 className='text-2xl text-blue font-bold'>Hello World.</h1>
            <h2 className='text-2xl text-blue font-bold'>My name is Wesley Damasceno.</h2>
          </div>
        </header>

        <p className='max-w-xl'>
          I'm a software developer based in Brazil. Currently with knowledge in front-end and back-end with
          JavaScript. Looking for an opportunity to use my coding <i className='text-blue font-bold'>skills</i>, solve complex problems and help complete
          projects. Besides programming, I like video games, old movies, chess and math.
        </p>

        <footer className='flex gap-x-6'>
          <Links />
        </footer>
      </main>
    </div>
  );
};