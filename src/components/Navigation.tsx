export function Navigation() {
  return (
    <nav className='text-gray'>
      <ul className='md:grid flex'>
        <li className='text-white px-4 py-2 rounded-md bg-dark-gray'>Home</li>
        <li className='px-4 py-2'>Blog</li>
        <li className='px-4 py-2'>Social</li>
      </ul>
    </nav>
  )
}