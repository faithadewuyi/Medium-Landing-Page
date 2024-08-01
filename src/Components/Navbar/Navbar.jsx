
import '../Navbar/Navbar.css'
const Navbar = () => {
  return (
    <div className="navbar">
  <nav className='nav'>
    <a className='logo'>Medium</a>
    <div className='nav-container'>
      <ul className='nav-links'>
        <li><a href="#">Our Story</a></li>
        <li><a href="#">Membership</a></li>
        <li><a href="#">Write</a></li>
        <li><a href="#">Sign in</a></li>
      </ul>
      <button className='get-started'>Get Started</button>
    </div>
  </nav>
</div>

  )
}

export default Navbar
