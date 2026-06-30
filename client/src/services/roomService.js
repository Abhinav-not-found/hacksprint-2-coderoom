import axios from "axios";

const API_BASE = "http://localhost:8001/api/rooms";

export const createRoom = (payload) => {
	return axios.post(`${API_BASE}/create`, payload);
};

export const joinRoom = (payload) => {
	return axios.post(`${API_BASE}/join`, payload);
};
