import axios from "axios";

const API = "https://ai-startup-validator-api.onrender.com";

export const validateIdea = async (idea, token) => {
  return axios.post(
    `${API}/validate`,
    { idea },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const getHistory = async (token) => {
  return axios.get(`${API}/history`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const deleteValidation = async (id, token) => {
  return axios.delete(`${API}/history/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const enhanceIdea = async (idea, token) => {

    return axios.post(
        `${API}/enhance`,
        { idea },
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );

};

export const getRemaining = async (token) => {

    return axios.get(`${API}/remaining`, {

        headers: {
            Authorization: `Bearer ${token}`,
        },

    });

};

export const downloadReport = async (id, token) => {
  return axios.get(`${API}/report/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    responseType: "blob",
  });
};