import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
console.log('images: ', images);

const cx = classNames.bind(styles);

const Header = () => {
	return (
		<header className={cx('wrapper')}>
			<div className={cx('inner')}>
				<div className={cx('logo')}>
					<img src={images.logo} alt="Tiktok Logo" />
				</div>
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
				<div className={cx('actions')}></div>
			</div>
		</header>
	);
};

export default Header;
