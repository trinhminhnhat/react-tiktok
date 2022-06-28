import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

const MenuItem = ({title, to, icon}) => {
	return <NavLink className={({isActive}) => cx('menu-item', {active: isActive})} to={to}>
        {icon} <span className={cx('title')}>{title}</span>
    </NavLink>;
};

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired
}

export default MenuItem;
