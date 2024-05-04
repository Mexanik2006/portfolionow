import axios from "axios";


const Api = axios.create({
    baseURL: 'http://localhost:5000'
});
// const Api = axios.create({
//     baseURL: 'https://debt-project-backend.onrender.com'
// });

export default Api;