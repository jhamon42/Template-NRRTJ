import { Route } from 'react-router-dom';

import { ScreenHome } from 'src/Screens/Home/home';
import { ScreenSearch } from 'src/Screens/Search/search';

const globalRoutes = [
    {
        path: ['/', '/Accueil'],
        component: ScreenHome,
        exact: true
    }, {
        path: '/Search',
        component: ScreenSearch,
        exact: true
    }];

export const GlobalRoutes = globalRoutes.map(
    ({ path, component, exact }) => <Route key={typeof path === 'string' ? path : path[0]} exact={exact} path={path} component={component} />
);