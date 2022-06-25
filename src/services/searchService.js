import * as httpRequest from '~/ultils/httpRequest';

const search = async (q, type = 'less') => {
	try {
		const res = await httpRequest.get('users/search', {
			params: {
				q,
				type,
			},
		});

		return res.data;
	} catch (error) {
		console.error(error);
	}
};

export {
    search,
}
