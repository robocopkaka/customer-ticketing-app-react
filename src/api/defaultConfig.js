import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 1000,
  headers: {
    'session_id': `${localStorage.sessionId}`,
    'Content-Type': 'application/json'
  }
});

export default instance;
