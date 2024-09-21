import axios from "axios";

const instance = axios.create({
  baseURL :  "http://localhost:8000/api/v1",
  headers: {
    'Authorization': `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmI3NTZhNGJhZWNlOGZjZDQ2NDA0OWIiLCJlbWFpbCI6InJyQDEyM2dtYWlsLmNvbSIsInVzZXJuYW1lIjoiciIsImZ1bGxuYW1lIjoicm9oYW5yYWpwdXQiLCJpYXQiOjE3MjY5MjAxMTEsImV4cCI6MTcyNzAwNjUxMX0.aO7d_N47gvM32vFlh9APsKtZrTXqjEIuQ0Wnd44di4o'}` 
}
});


export default instance;