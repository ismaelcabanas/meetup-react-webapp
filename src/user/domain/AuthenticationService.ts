import { AuthenticationResult } from "./AuthenticationResult";

export default interface AuthenticationService {
    authenticate(username: String, password: String): AuthenticationResult
}