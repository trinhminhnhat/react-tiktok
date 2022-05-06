import Header from '~/components/Layouts/components/Header';

const HeaderOnly = ({ children }) => {
	return (
		<>
			<Header />
			<div className='container'>
				<div className='content'>{children}</div>
			</div>
		</>
	);
};

export default HeaderOnly;
