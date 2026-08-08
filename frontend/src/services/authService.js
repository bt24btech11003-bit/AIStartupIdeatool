import axios from "axios";

const API = "http://localhost:8000";

export const loginUser = async (data) => {
    return axios.post(`${API}/auth/login`, data);
};

export const signupUser = async (data) => {
    return axios.post(`${API}/auth/signup`, data);
};