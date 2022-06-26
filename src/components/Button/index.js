import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

const Button = ({
	to,
	href,
	onClick,
	children,
	type = 'normal',
	size = 'medium',
	rounded = false,
	disabled = false,
	leftIcon,
	rightIcon,
	className,
	...additionalProps
}) => {
	let Component = 'button';
	const classes = cx('wrapper', className, {
		[type]: type,
		[size]: size,
		rounded,
		disabled,
	});

	const props = {
		onClick,
		...additionalProps,
	};

	// remove event listeners when button is disabled
	if (disabled) {
		Object.keys(props).forEach((key) => {
			if (key.startsWith('on')) {
				delete props[key];
			}
		});
	}

	if (to) {
		Component = Link;
		props.to = to;
	} else if (href) {
		Component = 'a';
		props.href = href;
	}

	return (
		<Component className={classes} {...props}>
			{leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
			<span className={cx('title')}>{children}</span>
			{rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
		</Component>
	);
};

Button.propTypes = {
	to: PropTypes.string,
	href: PropTypes.string,
	onClick: PropTypes.func,
	children: PropTypes.node.isRequired,
	type: PropTypes.oneOf(['default', 'primary', 'outline', 'text']),
	size: PropTypes.oneOf(['small', 'medium', 'large']),
	rounded: PropTypes.bool,
	disabled: PropTypes.bool,
	leftIcon: PropTypes.node,
	rightIcon: PropTypes.node,
	className: PropTypes.string
}

export default Button;
