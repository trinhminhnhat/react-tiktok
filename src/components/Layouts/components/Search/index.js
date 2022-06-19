import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TippyHeadless from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useEffect, useState, useRef } from 'react';
import AccountItem from '~/components/AccountItem';
import { SearchIcon } from '~/components/Icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

const Search = () => {
	const inputRef = useRef();
	const [searchValue, setSearchValue] = useState('');
	const [searchResult, setSearchResult] = useState([]);
	const [showResult, setShowResult] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setSearchResult([1, 2]);
		}, 0);
	}, []);

	const handleClear = () => {
		setSearchValue('');
		setSearchResult([]);
		inputRef.current.focus();
	};

	const handleHideResult = () => {
		setShowResult(false);
	};

	return (
		<TippyHeadless
			interactive
			visible={showResult && searchResult.length > 0}
			render={(attrs) => (
				<div className={cx('search-results')} tabIndex="-1" {...attrs}>
					<PopperWrapper>
						<h4 className={cx('search-title')}>Accounts</h4>
						<AccountItem />
						<AccountItem />
					</PopperWrapper>
				</div>
			)}
			onClickOutside={handleHideResult}
		>
			<div className={cx('search')}>
				<input
					type="text"
					ref={inputRef}
					value={searchValue}
					placeholder="Search accounts and videos"
					spellCheck={false}
					onChange={(e) => setSearchValue(e.target.value)}
					onFocus={(e) => setShowResult(true)}
				/>
				{searchValue && (
					<button className={cx('clear')} onClick={handleClear}>
						<FontAwesomeIcon icon={faCircleXmark} />
					</button>
				)}

				{/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> */}
				<button className={cx('search-btn')}>
					<SearchIcon />
				</button>
			</div>
		</TippyHeadless>
	);
};

export default Search;
