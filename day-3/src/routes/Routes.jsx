import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Home from '../pages/Home/Home';
import AddPost from '../pages/Add/AddPost';
import Update from '../pages/update/Update';

const myRoutes = createBrowserRouter([
    {
        path : "/",
        element : <MainLayout />,
        children: [
            {
                path : "/",
                element : <Home />
            },
            {
                path : "/add",
                element : <AddPost />
            },
            {
                path : "/update/:id",
                element : <Update />
            },
        ]
    }
])

export default myRoutes;