import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';

import 'tippy.js/dist/tippy.css'; // optional
import images from '~/assets/images';
import styles from './Header.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

const Header = () => {
	const [searchResults, setSearchResults] = useState([]);

	useEffect(() => {
		setTimeout(() => {
			setSearchResults([]);
		}, 0);
	}, []);

	return (
		<header className={cx('wrapper')}>
			<div className={cx('inner')}>
				<div className={cx('logo')}>
					<img src={images.logo} alt="Tiktok Logo" />
				</div>
				<Tippy
					interactive={true}
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
					<Button type="outline"  onClick={() => console.log('Upload')} className={cx('upload')}>
						Login
					</Button>
				</div>
			</div>
		</header>
	);
};

export default Header;
