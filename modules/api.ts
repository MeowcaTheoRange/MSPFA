import axios from 'axios';
import { Dialog } from './dialogs';

const api = axios.create();

/** This function works as if it is automatically plugged into every API call's `.catch`. */
const onReject = (error: any) => {
	console.error(error);

	new Dialog({
		title: 'Error',
		content: String(error.message)
	});

	return Promise.reject(error);
};
api.interceptors.request.use(
	undefined,
	onReject
);
api.interceptors.response.use(
	undefined,
	onReject
);

export default api;