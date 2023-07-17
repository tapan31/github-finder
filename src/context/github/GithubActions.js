import axios from "axios";
import axiosRetry from "axios-retry";

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

const github = axios.create({
  baseURL: GITHUB_URL,
  headers: {
    Authorization: `token ${GITHUB_TOKEN}`,
  },
});

axiosRetry(github, { retries: 3, retryDelay: axiosRetry.exponentialDelay });

// Search Users
export const searchUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
  });

  try {
    const response = await github.get(`/search/users?${params}`);
    return response.data.items;
  } catch (error) {
    console.error("Error in searchUsers:", error);
    throw error;
  }
};

// Get user and repos
export const getUserAndRepos = async (login) => {
  const params = new URLSearchParams({
    sort: "created",
    per_page: 10,
  });

  try {
    const [userResponse, reposResponse] = await axios.all([
      github.get(`/users/${login}`),
      github.get(`/users/${login}/repos?${params}`),
    ]);

    return {
      user: userResponse.data,
      repos: reposResponse.data,
    };
  } catch (error) {
    console.error("Error in getUserAndRepos:", error);
    throw error;
  }
};
