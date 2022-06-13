import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

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

export default Button;
