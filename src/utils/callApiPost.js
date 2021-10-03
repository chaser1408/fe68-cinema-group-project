import axios from "axios";
import { BASE_URL } from "settings/apiConfig";

const callApiPost = (endpoint = null, data) => {
  return axios({
    url: `${BASE_URL}/${endpoint}`,
    method: "POST",
    data,
    headers: {
      // TokenCybersoft:
      //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiU2FuZzE0IiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvZW1haWxhZGRyZXNzIjoic2FuZzE0QGdtYWlsLmNvbSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6WyJLaGFjaEhhbmciLCJzYW5nMTRAZ21haWwuY29tIiwiR1AwMCJdLCJuYmYiOjE2MzA5MTUwMjEsImV4cCI6MTYzMDkxODYyMX0.fmP84BesDFVMaTKOW6TbkT6VjihzZop3IrOxCc_NN_w",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoic2FuZzI4OSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2VtYWlsYWRkcmVzcyI6InNhbmd0cEBnbWFpbC5jb20iLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOlsiUXVhblRyaSIsInNhbmd0cEBnbWFpbC5jb20iLCJHUDAyIl0sIm5iZiI6MTYzMzIyNzExOCwiZXhwIjoxNjMzMjMwNzE4fQ.EOIoWFsdGdvRDJCuT_Vxoj248q0WBxyu4eDolOZWVOQ",
    },
  });
};

export default callApiPost;




// import axios from "axios";
// import { BASE_URL } from "settings/apiConfig";

// const callApiPost = (endpoint = null, data) => {
//   return axios({
//     url: ${BASE_URL}/${endpoint},
//     method: "POST",
//     data,
//     headers: {
//       // TokenCybersoft:
//       //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiU2FuZzE0IiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvZW1haWxhZGRyZXNzIjoic2FuZzE0QGdtYWlsLmNvbSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6WyJLaGFjaEhhbmciLCJzYW5nMTRAZ21haWwuY29tIiwiR1AwMCJdLCJuYmYiOjE2MzA5MTUwMjEsImV4cCI6MTYzMDkxODYyMX0.fmP84BesDFVMaTKOW6TbkT6VjihzZop3IrOxCc_NN_w",
//       Authorization:
//         "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoic2FuZzI4OSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2VtYWlsYWRkcmVzcyI6InNhbmd0cEBnbWFpbC5jb20iLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOlsiUXVhblRyaSIsInNhbmd0cEBnbWFpbC5jb20iLCJHUDAyIl0sIm5iZiI6MTYzMzIyNzExOCwiZXhwIjoxNjMzMjMwNzE4fQ.EOIoWFsdGdvRDJCuT_Vxoj248q0WBxyu4eDolOZWVOQ",
//     },
//   });
// };

// export default callApiPost;
// // sang289
// // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoic2FuZzI4OSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2VtYWlsYWRkcmVzcyI6InNhbmd0cEBnbWFpbC5jb20iLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOlsiUXVhblRyaSIsInNhbmd0cEBnbWFpbC5jb20iLCJHUDAyIl0sIm5iZiI6MTYzMzIyNzExOCwiZXhwIjoxNjMzMjMwNzE4fQ.EOIoWFsdGdvRDJCuT_Vxoj248q0WBxyu4eDolOZWVOQ

// // của anh Ý khi demo - cái ở trên code là của sang289
// // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoidGhhaSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2VtYWlsYWRkcmVzcyI6InRoYWlAZ21haWwuY29tIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjpbIlF1YW5UcmkiLCJ0aGFpQGdtYWlsLmNvbSIsIkdQMDAiXSwibmJmIjoxNjMyMzU4NDQ5LCJleHAiOjE2MzIzNjIwNDl9.qiIXssYLQqwCkHCfFXYkHurGD7r2GZ7U_-PXwJR5Wwk
