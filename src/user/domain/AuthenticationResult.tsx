export class AuthenticationResult {    
    access_token: string;

    constructor(accessToken: string) {
        this.access_token = accessToken
    }
}