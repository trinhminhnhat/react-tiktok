import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import Button from '~/components/Button';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

const MenuItem = ({ data, onClick }) => {
	return (
		<Button
			className={cx('menu-item', { separate: data.separate })}
			leftIcon={data.icon}
			to={data.to}
			onClick={onClick}
		>
			{data.title}
		</Button>
	);
};

MenuItem.propTypes = {
	data: PropTypes.shape({
		title: PropTypes.string.isRequired,
		separate: PropTypes.bool,
		icon: PropTypes.node,
		to: PropTypes.string,
	}).isRequired,
	onClick: PropTypes.func,
}

export default MenuItem;
