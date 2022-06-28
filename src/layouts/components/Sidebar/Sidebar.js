import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from '~/layouts/components/Sidebar/Menu';
import { HomeIcon, UserGroupIcon, LiveIcon } from '~/components/Icons'
import { routesConfig } from '~/config';

const cx = classNames.bind(styles);

const Sidebar = () => {
	return <aside className={cx('wrapper')}>
		<Menu>
			<MenuItem title="For You" to={routesConfig.HOME} icon={<HomeIcon />} />
			<MenuItem title="Following" to={routesConfig.FOLLOWING} icon={<UserGroupIcon />} />
			<MenuItem title="LIVE" to={routesConfig.LIVE} icon={<LiveIcon />} />
		</Menu>
	</aside>;
};

export default Sidebar;
