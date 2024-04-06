import Login from '../pages/Login'
import Contact from '../pages/Contact'
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

export const routes = [ // Array of object
    {
        path:'/',
        element:<Home />
    },
    {
        path:'/login',
        element:<Login />
    },
    {
        path:'/contact',
        element:<Contact />
    },
    {
        path:'/*',
        element:<NotFound />
    }
];