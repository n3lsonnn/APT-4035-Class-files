import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">IT Solutions WorldWide</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <Link className='nav-link' to='/'>Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link className='nav-link' to='/about'>About</Link>
                        </li>
                        <li class="nav-item">
                            <Link className='nav-link' to='/contact'>Contact</Link>
                        </li>

                    </ul>
                </div>
            </nav>
            <nav>



            </nav>
        </div>
    );
}

export default Navigation;