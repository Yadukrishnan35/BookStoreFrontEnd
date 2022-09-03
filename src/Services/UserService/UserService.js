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

    registerService(reqPayload) {
        console.log(reqPayload);
        let httpHeaders = {
            headers: {
                
                'Content-type': 'application/json'
            }
        }
        return AxiosService.prototype.postService('register', reqPayload, false, httpHeaders);
        
    }
    forgetPasswordService(reqPayload) {
        console.log(reqPayload);
        let httpHeaders = {
            headers: {
                'Content-type': 'application/json'
            }
        }
        return AxiosService.prototype.postService('forgotPassword', reqPayload, false, httpHeaders)
    }

    resetPasswordService(reqPayload) {
        console.log(reqPayload);
        let token = localStorage.getItem('token')
        console.log(token);
 
        let httpHeaders = {
            headers: {
                'Content-type': 'application/json'
            }
        }
        return AxiosService.prototype.postService('resetPassword', reqPayload, false, httpHeaders)
    }
    
}