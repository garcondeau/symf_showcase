import routes from "./routes";
import UsersPage from "../../pages/UsersPage";

const clientRoutes = [
    {
        title: 'Users',
        path: '/users',
        exact: true,
        component: UsersPage
    },
]

const clientRoutesFinall = clientRoutes.concat(routes);

export default clientRoutesFinall;