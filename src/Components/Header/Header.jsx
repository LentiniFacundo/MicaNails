const Header = ({title, children}) => {
  return (
    <header className='w-full flex flex-col bg-bgc px-4 sticky top-0 z-50
        md:flex-row'>
        <h1 className='font-jakarta font-extrabold text-lg w-40 mb-4 first-letter:text-primary first-letter:text-2xl'><a href='/'>{title}</a></h1>
        {children}
    </header>
  )
}

export default Header