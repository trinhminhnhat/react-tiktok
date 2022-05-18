import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const Button = ({ to, href, onClick, children, type, className, ...additionalProps }) => {
	console.log('className: ', className);
	console.log('additionalProps: ', additionalProps);
	let Component = 'button';
	const classes = cx('wrapper', className, {
		[type]: type,
		
	})

	const props = {
		onClick,
		...additionalProps
	}

	if (to) {
		Component = Link;
		props.to = to;
	} else if (href) {
		Component = 'a';
		props.href = href;
	}

	return <Component className={classes} {...props}>
		<span>{ children }</span>
	</Component>;
};

export default Button;
