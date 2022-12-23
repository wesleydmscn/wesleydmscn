import { Analytics } from './components/Analytics';
import { Links } from './components/Links';
import { Navigation } from './components/Navigation';

import './styles/global.css';

export const App = () => {
  return (
    <div className='flex flex-wrap gap-16 m-8'>
      <Navigation />

      <main className='grid gap-y-6 text-white'>
        <h1 className='text-3xl text-white font-normal'>Wesley Damasceno</h1>
        <p className='max-w-xl text-gray'>
          Computing enthusiast with ~1 year of experience looking for a career transition.
        </p>

        <section className='flex gap-6'>
          <img 
            className='w-24 h-24 rounded-full grayscale hover:grayscale-0' 
            src='/avatar.png' 
            alt="Profile Avatar" 
          />

          <Analytics />
        </section>

        <p className='max-w-xl text-gray'>
          Currently with knowledge in front-end and back-end with JavaScript. Looking for an opportunity to use my coding skills, solve complex problems and help complete projects. Besides programming, I like video games, old movies, chess and math.
        </p>

        <Links />
      </main>
    </div>
  );
};