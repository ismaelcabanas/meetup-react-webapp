import { AuthenticationResult } from "../../login/services/authenticationResult";

export default interface AuthenticationService {
    authenticate(username: String, password: String): AuthenticationResult
}