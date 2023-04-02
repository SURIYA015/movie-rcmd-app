// import axios from "axios";
// export default {
//   async apiRequest(
//     ctx,
//     { method, route, body, formData, updateAfter = 10000 }
//   ) {
//     body = body || {};
//     const requestKey = `${method.toLowerCase()} ${route}`;
//     if (
//       ctx.state.requestQueue[requestKey] &&
//       ctx.state.requestQueue[requestKey].expiresAt >= Date.now()
//     )
//       return ctx.state.requestQueue[requestKey].response;

//     if (localStorage.getItem("userToken"))
//       axios.defaults.headers.common["Authorization"] =
//         "bearer " + localStorage.getItem("userToken");

//     try {
//       const apiCall = formData
//         ? axios[method](process.env.APIBASEURL + route, formData, {
//             headers: {
//               "Content-Type": "multipart/form-data",
//             },
//           })
//         : axios[method](process.env.APIBASEURL + route, {
//             ...body,
//           });
//       if (method.toLowerCase() == "get") {
//         ctx.commit("requestQueue/SET_REQUEST", {
//           request: requestKey,
//           expiresAt: Date.now() + updateAfter,
//           response: apiCall,
//         });
//       }
//       let response = await apiCall;
//       return response;
//     } catch (err) {
//       throw err;
//     }
//   },
// };
