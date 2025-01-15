import axios from "axios";


// const Api = axios.create({
//     baseURL: 'http://localhost:5000'
// });
const Api = axios.create({
    baseURL: 'https://myportfolioback.vercel.app'
});

export default Api;