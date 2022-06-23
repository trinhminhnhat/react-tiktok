import { HeaderOnly } from '~/components/Layouts';
import routesConfig from '~/config/routes';
import Following from '~/pages/Following';
import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import Search from '~/pages/Search';
import Upload from '~/pages/Upload';

const publicRoutes = [
    {
        path: routesConfig.HOME, component: Home,
    },
    {
        path: routesConfig.FOLLOWING, component: Following
    },
    {
        path: routesConfig.PROFILE, component: Profile
    },
    {
        path: routesConfig.UPLOAD, component: Upload, layout: HeaderOnly
    },
    {
        path: routesConfig.SEARCH, component: Search, layout: null
    },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };

