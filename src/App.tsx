import { LinkedinLogo, GithubLogo, CodepenLogo } from 'phosphor-react';
import './styles/global.css';

export const App = () => {
  return (
    <div className='sm:text-sm md:text-base w-screen h-screen bg-blue grid place-items-center'>
      <section className='flex flex-col gap-y-6'>
        <p className='text-blue-light'>import &#123; social &#125; from "./backpack.js"</p>

        <div>
          <p className='text-blue-light'>function myLinks&#40; links &#41; &#123;</p>
          <p className='text-blue-light ml-6'>return &#40;</p>

          <div className='my-6 flex gap-x-6 justify-center'>
            <a 
              className='hover:bg-blue-dark transition-colors rounded'
              href="https://www.linkedin.com/in/wesleydamasceno/"
              target="_blank"
            >
              <LinkedinLogo size={48} color="white" weight='light'/>
            </a>

            <a 
              className='hover:bg-blue-dark transition-colors rounded'
              href="https://github.com/wesleydamasceno"
              target="_blank"
            >
              <GithubLogo size={48} color="white" weight='light'/>
            </a>

            <a 
              className='hover:bg-blue-dark transition-colors rounded'
              href="https://codepen.io/wesleydmscn/pens/public"
              target="_blank"
            >
              <CodepenLogo size={48} color="white" weight='light'/>
            </a>
          </div>

          <p className='text-blue-light ml-6'>&#41;</p>
          <p className='text-blue-light'>&#125;</p>
        </div>

        <p className='text-blue-light'>myLinks&#40;social&#41;;</p>
      </section>
    </div>
  );
};