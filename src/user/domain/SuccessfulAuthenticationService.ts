import { AuthenticationResult } from './AuthenticationResult';
import AuthenticationService from './AuthenticationService'

export default class SuccessfulAuthenticationService implements AuthenticationService {
    authenticate(username: String, password: String): AuthenticationResult {
        return new AuthenticationResult("testToken")
    }

}