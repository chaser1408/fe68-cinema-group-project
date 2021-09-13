
import axios from "axios";
import { BASE_URL } from "settings/apiConfig";

const callApiPost = (endpoint, method = "POST", data = null) => {
  return axios({
    url: `${BASE_URL}/${endpoint}`,
    method,
    data,
    headers: {
      TokenCybersoft:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiU2FuZzE0IiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvZW1haWxhZGRyZXNzIjoic2FuZzE0QGdtYWlsLmNvbSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6WyJLaGFjaEhhbmciLCJzYW5nMTRAZ21haWwuY29tIiwiR1AwMCJdLCJuYmYiOjE2MzA5MTUwMjEsImV4cCI6MTYzMDkxODYyMX0.fmP84BesDFVMaTKOW6TbkT6VjihzZop3IrOxCc_NN_w",
    },
  })
}
export default callApiPost;

