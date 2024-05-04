import axios from "axios";


// const Api = axios.create({
//     baseURL: 'http://localhost:5000'
// });
const Api = axios.create({
    baseURL: 'https://portfolionow-back.onrender.com'
});

export default Api;