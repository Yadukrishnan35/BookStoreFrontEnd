import axios from "axios";
const BASE_URL = 'http://127.0.0.1:8000/api/';

export default class AxiosService {

    postService(url, reqPayload, token, httpAuthOptions) {
      console.log(reqPayload);
      return axios.post(BASE_URL + url, reqPayload, token && httpAuthOptions)
    }
}