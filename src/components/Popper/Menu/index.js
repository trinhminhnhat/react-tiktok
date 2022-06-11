import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';

const cx = classNames.bind(styles);

const Menu = ({ children, items = [] }) => {
	const renderItems = () => {
		return items.map((item, index) => {
			return <MenuItem key={index} data={item} />
		})
	}

	return (
		<Tippy
			interactive
			// visible
			placement="bottom-end"
			delay={[0, 700]}
			render={(attrs) => (
				<div className={cx('menu-list')} tabIndex="-1" {...attrs}>
					<PopperWrapper className={cx('menu-wrapper')}>
						{renderItems()}
					</PopperWrapper>
				</div>
			)}
		>
			{children}
		</Tippy>
	);
};

export default Menu;
