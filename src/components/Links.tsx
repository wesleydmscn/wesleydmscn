import { LinkedinLogo, GithubLogo, CodepenLogo, TwitterLogo } from 'phosphor-react';

interface Link {
  url: string;
  children: JSX.Element;
}

const Link = ({ url, children }: Link) => {
  return (
    <a className='hover:bg-blue-dark transition-colors rounded' href={url}>
      {children}
    </a>
  )
}

export const Links = () => {
  return (
    <>
      <Link url='https://github.com/wesleydmscn'>
        <GithubLogo size={32} color="#317BC0"/>
      </Link>

      <Link url='https://codepen.io/wesleydmscn/pens/public'>
        <CodepenLogo size={32} color="#317BC0"/>
      </Link>

      <Link url='https://www.linkedin.com/in/wesleydamasceno/'>
        <LinkedinLogo size={32} color="#317BC0"/>
      </Link>

      <Link url='https://twitter.com/wesleydmscn'>
        <TwitterLogo size={32} color="#317BC0"/>
      </Link>
    </>
  )
}