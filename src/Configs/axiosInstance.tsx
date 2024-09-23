
import axios from "axios";

const instance = axios.create({
  baseURL :  "http://localhost:8000/api/v1",
  headers: {
    'Authorization': `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmI3NTZhNGJhZWNlOGZjZDQ2NDA0OWIiLCJlbWFpbCI6InJyQDEyM2dtYWlsLmNvbSIsInVzZXJuYW1lIjoiciIsImZ1bGxuYW1lIjoicm9oYW5yYWpwdXQiLCJpYXQiOjE3MjcwOTcwMjIsImV4cCI6MTcyNzE4MzQyMn0.xiOUXPC84fsCjWkNOP2CbIlK0SdIg3JPUX-UoMU5HGs'}` 
}
});


export default instance;






