import axios from "axios";

const API = "https://ai-startup-validator-api.onrender.com";

export const loginUser = async (data) => {
    return axios.post(`${API}/auth/login`, data);
};

export const signupUser = async (data) => {
    return axios.post(`${API}/auth/signup`, data);
};