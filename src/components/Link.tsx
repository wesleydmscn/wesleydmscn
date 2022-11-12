interface LinkURL {
  url: string;
  children: JSX.Element;
}

export const Link = ({ url, children }: LinkURL) => {
  return (
    <a className='hover:bg-blue-dark transition-colors rounded' href={url}>
      {children}
    </a>
  ) 
}