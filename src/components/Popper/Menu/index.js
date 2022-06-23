import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuHeader from './Header';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';

const cx = classNames.bind(styles);

const Menu = ({ children, items = [], hideOnClick = false, onChange = () => {} }) => {
	const [history, setHistory] = useState([{ data: items }]);
	const current = history[history.length - 1];

	const renderItems = () => {
		return current.data.map((item, index) => {
			const isParent = !!item.subMenus;
			return (
				<MenuItem
					key={index}
					data={item}
					onClick={() => {
						if (isParent) {
							setHistory((pre) => [...pre, item.subMenus]);
						} else {
							onChange(item);
						}
					}}
				/>
			);
		});
	};

	return (
		<Tippy
			interactive
			// visible
			placement="bottom-end"
			offset={[12, 8]}
			delay={[0, 700]}
			hideOnClick={hideOnClick}
			render={(attrs) => (
				<div className={cx('menu-list')} tabIndex="-1" {...attrs}>
					<PopperWrapper className={cx('menu-wrapper')}>
						{history.length > 1 && (
							<MenuHeader
								title={current.title}
								onBack={() => {
									setHistory((pre) => history.slice(0, -1));
								}}
							/>
						)}
						{renderItems()}
					</PopperWrapper>
				</div>
			)}
			onHide={() => setHistory((pre) => history.slice(0, 1))}
		>
			{children}
		</Tippy>
	);
};

export default Menu;
