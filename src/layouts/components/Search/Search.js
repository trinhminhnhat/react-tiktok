import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TippyHeadless from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import AccountItem from '~/components/AccountItem';
import { SearchIcon } from '~/components/Icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Search.module.scss';
import { useDebounce } from '~/hooks';
import * as searchService from '~/services/searchService';

const cx = classNames.bind(styles);

const Search = () => {
	const inputRef = useRef();
	const [searchValue, setSearchValue] = useState('');
	const [searchResult, setSearchResult] = useState([]);
	const [showResult, setShowResult] = useState(true);
	const [loading, setLoading] = useState(false);
	const debounceValue = useDebounce(searchValue, 700);

	useEffect(() => {
		if (!debounceValue.trim()) {
			setSearchResult([]);
			return;
		}

		setLoading(true);

		const onSearch = async () => {
			setLoading(true);
			const result = await searchService.search(debounceValue);
			setSearchResult(result);
			setLoading(false);
		};

		onSearch();
	}, [debounceValue]);

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
		// Using a wrapper <div> or <span> tag around the reference element solves this by
		// creating a new parentNode context
		<div>
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
					<button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
						<SearchIcon />
					</button>
				</div>
			</TippyHeadless>
		</div>
	);
};

export default Search;
