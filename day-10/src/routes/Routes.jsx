
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import Posts from '../pages/Posts';
import PostDetails from '../pages/PostDetails';
import Users from '../pages/Users';
import UserDetails from '../pages/UserDetails';
import Comments from '../pages/Comments';
import Comment from '../pages/Comment';

const myRoutes = createBrowserRouter([
    {
        path: "/",
        element : <MainLayout />,
        children : [
            {
                path: '/',
                element : <Home />,
            },
            {
                path: '/posts',
                element : <Posts />,
            },
            {
                path: '/posts/:id',
                element : <PostDetails />,
            },
            {
                path: '/users',
                element : <Users />,
            },
            {
                path: '/users/:id',
                element : <UserDetails />,
            },
            {
                path: '/comments',
                element : <Comments />,
            },
            {
                path: '/comments/:id',
                element : <Comment />,
            },
        ]
    }
])

export default myRoutes;