// export const getUsers = () => {
//     // eslint-disable-next-line no-undef
//     const axios = require('axios');
//
//     let config = {
//         method: 'get',
//         maxBodyLength: Infinity,
//         url: 'http://localhost:8080/api/v1/users',
//         headers: {
//             'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhcmlmQGdtYWlsLmNvbSIsImlhdCI6MTY4MzEyMTY2MCwiZXhwIjoxNjgzMTIzNDYwfQ.1yyDArDz-TTNWeej_mLhe6Vn83VPacHkYkQlyW9FVKM'
//         }
//     };
//
//     axios.request(config)
//         .then((response) => {
//             console.log(JSON.stringify(response.data));
//         })
//         .catch((error) => {
//             console.log(error);
//         });
//
// }