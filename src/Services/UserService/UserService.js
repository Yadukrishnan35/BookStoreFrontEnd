import AxiosService from "../AxiosService/AxiosService";

export default class UserService {
    loginService(reqPayload) {
        console.log(reqPayload);
        let httpHeaders = {
            headers: {
                'Authorisation': 'token',
                'Content-type': 'application/json'
            }
        }
        return AxiosService.prototype.postService('login', reqPayload, false, httpHeaders);
        
    }
}