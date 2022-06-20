import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TippyHeadless from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
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
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (!searchValue.trim()) {
			setSearchResult([]);
			return;
		}

		setLoading(true);
		fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(searchValue)}&type=less`)
			.then((res) => res.json())
			.then((res) => {
				setSearchResult(res.data);
				setLoading(false);
			})
			.catch(() => {
				setLoading(false);
			});
	}, [searchValue]);

	const handleClear = () => {
		setSearchValue('');
		setSearchResult([]);
		inputRef.current.focus();
	};

	const handleHideResult = () => {
		setShowResult(false);
	};

	const handleSpace = (e) => {
		if (e.target.value[0] !== ' ') {
			setSearchValue(e.target.value);
		}
	};

	return (
		<TippyHeadless
			interactive
			visible={showResult && searchResult.length > 0}
			render={(attrs) => (
				<div className={cx('search-results')} tabIndex="-1" {...attrs}>
					<PopperWrapper>
						<h4 className={cx('search-title')}>Accounts</h4>
						{searchResult.map((item) => (
							<AccountItem key={item.id} data={item} />
						))}
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
					onChange={handleSpace}
					onFocus={(e) => setShowResult(true)}
				/>
				{searchValue && !loading && (
					<button className={cx('clear')} onClick={handleClear}>
						<FontAwesomeIcon icon={faCircleXmark} />
					</button>
				)}
				{loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
				<button className={cx('search-btn')}>
					<SearchIcon />
				</button>
			</div>
		</TippyHeadless>
	);
};

export default Search;
