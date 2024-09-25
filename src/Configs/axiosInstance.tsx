
import axios from "axios";

const instance = axios.create({
  baseURL :  "http://localhost:8000/api/v1",
  headers: {
    'Authorization': `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmI3NTZhNGJhZWNlOGZjZDQ2NDA0OWIiLCJlbWFpbCI6InJyQDEyM2dtYWlsLmNvbSIsInVzZXJuYW1lIjoiciIsImZ1bGxuYW1lIjoicm9oYW5yYWpwdXQiLCJpYXQiOjE3MjcyNjIxMjIsImV4cCI6MTcyNzM0ODUyMn0.AZTPQXAsu1eWTI_SM4RbN3FQb5fRy-s4rgUQs1LOMp8'}` 
}
});


export default instance;






