
import { Link } from 'react-router-dom';
import './Logo.scss'
const Logo = () => {
    return (
        <Link to={'/'}>
            <span className='logo'>POST LISTS APP</span>
        </Link>
    );
};

export default Logo;