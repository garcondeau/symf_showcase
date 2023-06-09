import HomePage from "../../pages/Home";
import Sandwiches from "../../pages/Sandwiches";

const routes = [
    {
        title: 'Home page',
        path: '/',
        element: <HomePage/>
    },
    {
        title: 'Sandwiches store',
        path: '/sandwiches',
        element: <Sandwiches/>
    },
]

export default routes;