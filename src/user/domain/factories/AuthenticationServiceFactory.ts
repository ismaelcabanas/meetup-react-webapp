import AuthenticationService from "../AuthenticationService";
import SuccessfulAuthenticationService from "../SuccessfulAuthenticationService";

export default class AuthenticationServiceFactory {
    static create(): AuthenticationService {
        return new SuccessfulAuthenticationService()
    }
}