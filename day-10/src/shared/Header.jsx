
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='py-4 bg-white'>
            <div className="container">
                <ul  className='flex gap-4 items-center justify-center'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/posts">Posts</Link></li>
                    <li><Link to="/users">Users</Link></li>
                </ul>
            </div>
        </header>
    );
};

export default Header;