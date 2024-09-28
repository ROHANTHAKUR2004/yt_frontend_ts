
import axios from "axios";

const instance = axios.create({
  baseURL :  "http://localhost:8000/api/v1",
  headers: {
    'Authorization': `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmI3NTZhNGJhZWNlOGZjZDQ2NDA0OWIiLCJlbWFpbCI6InJyQDEyM2dtYWlsLmNvbSIsInVzZXJuYW1lIjoiciIsImZ1bGxuYW1lIjoicm9oYW5yYWpwdXQiLCJpYXQiOjE3Mjc1MjAzODQsImV4cCI6MTcyNzYwNjc4NH0.1ODAW_ian609cGW0akQU_sNSpNIO3AkfbN4PDz5vazI'}` 
}
});


export default instance;






