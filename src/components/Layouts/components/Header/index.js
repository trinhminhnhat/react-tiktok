import { faCircleQuestion } from '@fortawesome/free-regular-svg-icons';
import {
	faCircleXmark,
	faEarthAsia,
	faEllipsisVertical,
	faKeyboard,
	faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import 'tippy.js/dist/tippy.css'; // optional
import images from '~/assets/images';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Menu from '~/components/Popper/Menu';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

const Header = () => {
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
				<Tippy
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
				</Tippy>
				<div className={cx('actions')}>
					<Button type="text">Upload</Button>
					<Button type="primary">Login</Button>

					<Menu items={menuItems} onChange={handleMenuChange}>
						<button className={cx('more-btn')}>
							<FontAwesomeIcon icon={faEllipsisVertical} />
						</button>
					</Menu>
				</div>
			</div>
		</header>
	);
};

export default Header;
