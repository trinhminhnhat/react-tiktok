import { forwardRef, useState } from 'react';
import images from '~/assets/images';
import classNames from 'classnames';
import styles from './Image.module.scss';

const Image = ({ src, alt, className, fallback: customFallback = images.defaultImage, ...props }, ref) => {
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
};

export default forwardRef(Image);
