import { GOOGLE_AUTH_FAIL, GOOGLE_AUTH_SUCCESS, LOGOUT } from "./types";

import axios from "axios";
axios.defaults.withCredentials = true;

export const googleAuthenticate = (state, code) => async (dispatch) => {
	if (state && code && !localStorage.getItem("access")) {
		try {
			const res = await axios.post(
				`${process.env.REACT_APP_API_URL}/user/o/google-oauth2/?state=${state}&code=${code}`,
			);
			console.log(res.data);
			dispatch({
				type: GOOGLE_AUTH_SUCCESS,
				payload: res.data,
			});
		} catch (err) {
			dispatch({
				type: GOOGLE_AUTH_FAIL,
			});
			console.log(err);
		}
	}
};

export const logout = () => (dispatch) => {
	dispatch({
		type: LOGOUT,
	});
};
