import axios from 'axios';

export const AUTH_USER = 'authenticate_user';
const Root_URL = `http://localhost:57231/`;

export default function authenticateUser(values){
	const url = `${Root_URL}Authenticate`;
	values.grant_type= 'password';	

	var params = new URLSearchParams();
	params.append('username', values.username);
	params.append('password', values.password);
	params.append('grant_type', 'password');

	const request = axios.post(url,params);
	
	return {
		type: AUTH_USER,
		payload : request
	};
}