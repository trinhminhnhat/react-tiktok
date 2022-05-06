// Layouts
import {HeaderOnly} from '~/components/Layouts';

import Following from '~/pages/Following';
import Home from '~/pages/Home';
import Search from '~/pages/Search';
import Upload from '~/pages/Upload';

const publicRoutes = [
    {
        path: '/', component: Home,
    },
    {
        path: '/following', component: Following
    },
    {
        path: '/upload', component: Upload, layout: HeaderOnly
    },
    {
        path: '/search', component: Search, layout: null
    },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };

