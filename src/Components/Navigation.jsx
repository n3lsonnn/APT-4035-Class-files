import { Link } from 'react-router-dom';

function Navigation() {
    return(
        <div>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">-</a> 
    <ul class="navbar-nav">
      <li class="nav-item">
      <Link className='nav-link' to = '/'>Home</Link>
      </li>
      <li class="nav-item">
      <Link className='nav-link' to = '/about'>About</Link>
      </li>
      <li class="nav-item">
      <Link className='nav-link' to = '/contact'>Contact</Link>
      </li>
    </ul>
</nav>
        </div>
    );
}

export default Navigation;
