
import Logo from '../components/logo/Logo';
import "../styles/header.scss";

const Header = () => {
    return (
        <header>
            <div className="container header">
                <div className="logo">
                    <Logo />
                </div>
                {/* <nav>
                    <ul className='nav-groups'>
                        <li><Link className='navitem' to="/add-post">Add</Link></li>
                        <li><Link className='navitem' to="/">Home</Link></li>
                    </ul>
                </nav> */}
            </div>
        </header>
    );
};

export default Header;