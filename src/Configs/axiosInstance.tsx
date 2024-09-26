
import axios from "axios";

const instance = axios.create({
  baseURL :  "http://localhost:8000/api/v1",
  headers: {
    'Authorization': `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmI3NTZhNGJhZWNlOGZjZDQ2NDA0OWIiLCJlbWFpbCI6InJyQDEyM2dtYWlsLmNvbSIsInVzZXJuYW1lIjoiciIsImZ1bGxuYW1lIjoicm9oYW5yYWpwdXQiLCJpYXQiOjE3MjczNDc1NjQsImV4cCI6MTcyNzQzMzk2NH0.w5ofZyYhRx8_-dOsBjdSVkJl4Y1V_wOB3_57z7Wyq9A'}` 
}
});


export default instance;






