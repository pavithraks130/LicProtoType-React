import {AUTH_USER} from '../actions/index';
function authUser(state = {},action){
	console.log(action.payload);
	switch(action.type){
		case AUTH_USER:
			return action.data;
		default :
			return state;
	}
	return state;
}