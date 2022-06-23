import { faCircleQuestion, faUser } from '@fortawesome/free-regular-svg-icons';
import {
	faArrowRightToBracket,
	faBitcoinSign,
	faChartLine,
	faEarthAsia,
	faEllipsisVertical,
	faGear,
	faKeyboard,
	faPlus,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import Button from '~/components/Button';
import { InboxIcon, MessageIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Menu from '~/components/Popper/Menu';
import Search from '../Search';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import routesConfig from '~/config/routes';

const cx = classNames.bind(styles);

const Header = () => {
	const isLogin = true;
	const menuItems = [
		{
			icon: <FontAwesomeIcon icon={faEarthAsia} />,
			title: 'English',
			subMenus: {
				title: 'Language',
				data: [
					{
						type: 'language',
						code: 'en',
						title: 'English',
					},
					{
						type: 'language',
						code: 'vi',
						title: 'Tiếng Việt',
					},
				],
			},
		},
		{
			icon: <FontAwesomeIcon icon={faCircleQuestion} />,
			title: 'Feedback and help',
			to: '/feedback',
		},
		{
			icon: <FontAwesomeIcon icon={faKeyboard} />,
			title: 'Keyboard shortcuts',
		},
	];
	const userMenuItems = [
		{
			icon: <FontAwesomeIcon icon={faUser} />,
			title: 'View profile',
		},
		{
			icon: <FontAwesomeIcon icon={faBitcoinSign} />,
			title: 'Get coins',
		},
		{
			icon: <FontAwesomeIcon icon={faChartLine} />,
			title: 'View analytics',
		},
		{
			icon: <FontAwesomeIcon icon={faGear} />,
			title: 'Settings',
		},
		...menuItems,
		{
			icon: <FontAwesomeIcon icon={faArrowRightToBracket} />,
			title: 'Log out',
			separate: true,
		},
	];

	const handleMenuChange = (menuItem) => {
		switch (menuItem.type) {
			case 'language':
				// Handle change language
				break;
			default:
		}
	};

	return (
		<header className={cx('wrapper')}>
			<div className={cx('inner')}>
				<Link to={routesConfig.HOME} className={cx('logo')}>
					<img src={images.logo} alt="Tiktok Logo" />
				</Link>
				<Search />
				<div className={cx('actions')}>
					<Button type="default" leftIcon={<FontAwesomeIcon icon={faPlus} />}>
						Upload
					</Button>
					{isLogin ? (
						<>
							<Tippy content="Message" placement="bottom">
								<button className={cx('actions__btn')}>
									<MessageIcon />
								</button>
							</Tippy>
							<Tippy content="Inbox" placement="bottom">
								<button className={cx('actions__btn')}>
									<InboxIcon />
									<span className={cx('badge')}>10</span>
								</button>
							</Tippy>
						</>
					) : (
						<>
							<Button type="primary">Login</Button>
						</>
					)}
					<Menu items={isLogin ? userMenuItems : menuItems} onChange={handleMenuChange}>
						{isLogin ? (
							<Image
								className={cx('avatar')}
								src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/00e538686eb095213de652cef4d5ed76~c5_720x720.jpeg?x-expires=1655193600&x-signature=%2BGIl35c4nZwJwF1LUwXwAeo3NPM%3D"
								alt="avatar"
							/>
						) : (
							<button className={cx('more-btn')}>
								<FontAwesomeIcon icon={faEllipsisVertical} />
							</button>
						)}
					</Menu>
				</div>
			</div>
		</header>
	);
};

export default Header;
