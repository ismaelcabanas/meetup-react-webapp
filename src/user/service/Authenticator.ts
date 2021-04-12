import { HttpClient } from "../../shared/http-client";
import { AuthenticationResult } from "../domain/AuthenticationResult";

interface AuthenticationRequest {
    username: string,
    password: string
}
export async function authenticate(username: string, password: string): Promise<AuthenticationResult> {
    const request: AuthenticationRequest = {
        username: username,
        password: password
    }
    return HttpClient.post('/users/authenticate', JSON.stringify(request))
}