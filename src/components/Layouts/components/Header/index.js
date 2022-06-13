import { faCircleQuestion, faUser } from '@fortawesome/free-regular-svg-icons';
import {
	faArrowRightToBracket,
	faBitcoinSign,
	faChartLine,
	faCircleXmark,
	faEarthAsia,
	faEllipsisVertical,
	faEnvelope,
	faGear,
	faKeyboard,
	faMagnifyingGlass,
	faPaperPlane,
	faPlus,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import TippyHeadless from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import images from '~/assets/images';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Menu from '~/components/Popper/Menu';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

const Header = () => {
	const isLogin = true;
	const [searchResults, setSearchResults] = useState([]);
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

	useEffect(() => {
		setTimeout(() => {
			setSearchResults([]);
		}, 0);
	}, []);

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
				<div className={cx('logo')}>
					<img src={images.logo} alt="Tiktok Logo" />
				</div>
				<TippyHeadless
					interactive
					visible={searchResults.length > 0}
					render={(attrs) => (
						<div className={cx('search-results')} tabIndex="-1" {...attrs}>
							<PopperWrapper>
								<h4 className={cx('search-title')}>Accounts</h4>
								<AccountItem />
								<AccountItem />
							</PopperWrapper>
						</div>
					)}
				>
					<div className={cx('search')}>
						<input type="text" placeholder="Search accounts and videos" spellCheck={false} />
						<button className={cx('clear')}>
							<FontAwesomeIcon icon={faCircleXmark} />
						</button>
						{/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> */}
						<button className={cx('search-btn')}>
							<FontAwesomeIcon icon={faMagnifyingGlass} />
						</button>
					</div>
				</TippyHeadless>
				<div className={cx('actions')}>
					<Button type="default" leftIcon={<FontAwesomeIcon icon={faPlus} />}>
						Upload
					</Button>
					{isLogin ? (
						<>
							<Tippy content="Message" placement="bottom">
								<button className={cx('actions__btn')}>
									<FontAwesomeIcon icon={faPaperPlane} />
								</button>
							</Tippy>
							<Tippy content="Inbox" placement="bottom">
								<button className={cx('actions__btn')}>
									<FontAwesomeIcon icon={faEnvelope} />
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
							<img
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
