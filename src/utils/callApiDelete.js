
import axios from "axios";
import { BASE_URL } from "settings/apiConfig";

const callApiPost = (endpoint, method = "DELETE", data = null) => {
  return axios({
    url: `${BASE_URL}/${endpoint}`,
    method,
    data,
    headers: {
    
      'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoidGhhaSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2VtYWlsYWRkcmVzcyI6InRoYWlAZ21haWwuY29tIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjpbIlF1YW5UcmkiLCJ0aGFpQGdtYWlsLmNvbSIsIkdQMDAiXSwibmJmIjoxNjMxNTUyNzk0LCJleHAiOjE2MzE1NTYzOTR9.su0_LVsOArv3CP5dqomsu1k2ywfDo85cTCXKqpB1CbQ'
    },
  })
}
export default callApiPost;

