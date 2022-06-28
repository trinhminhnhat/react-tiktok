import classNames from 'classnames';
import PropTypes from 'prop-types';
import { forwardRef, useState } from 'react';
import images from '~/assets/images';
import styles from './Image.module.scss';

const Image = forwardRef(({ src, alt, className, fallback: customFallback = images.defaultImage, ...props }, ref) => {
	const [fallback, setFallback] = useState(false);
	const handleError = () => {
		setFallback(customFallback);
	};

	return (
		<img
			className={classNames(styles.wrapper, className)}
			ref={ref}
			src={fallback || src}
			{...props}
			alt={alt}
			onError={handleError}
		/>
	);
});

Image.propTypes = {
	src: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
	className: PropTypes.string,
	fallback: PropTypes.string,
};

export default Image;
