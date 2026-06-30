import axios from "axios";

const API_BASE = import.meta.env.VITE_API_BASE_URL;

export const createRoom = (payload) => {
	return axios.post(`${API_BASE}/api/rooms/create`, payload);
};

export const joinRoom = (payload) => {
	return axios.post(`${API_BASE}/api/rooms/join`, payload);
};
