import Header from '~/components/Layouts/components/Header';
import Sidebar from './Sidebar';

const DefaultLayout = ({ children }) => {
	return (
		<>
			<Header />
			<div className='container'>
				<Sidebar />
				<div className='content'>{children}</div>
			</div>
		</>
	);
};

export default DefaultLayout;
