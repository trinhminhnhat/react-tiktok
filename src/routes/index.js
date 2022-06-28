import { HeaderOnly } from '~/layouts';
import { routesConfig } from '~/config';
import Following from '~/pages/Following';
import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import Search from '~/pages/Search';
import Upload from '~/pages/Upload';
import Live from '~/pages/Live';

const publicRoutes = [
	{
		path: routesConfig.HOME,
		component: Home,
	},
	{
		path: routesConfig.FOLLOWING,
		component: Following,
	},
	{
		path: routesConfig.PROFILE,
		component: Profile,
	},
	{
		path: routesConfig.UPLOAD,
		component: Upload,
		layout: HeaderOnly,
	},
	{
		path: routesConfig.SEARCH,
		component: Search,
		layout: null,
	},
	{
		path: routesConfig.LIVE,
		component: Live,
	},
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
