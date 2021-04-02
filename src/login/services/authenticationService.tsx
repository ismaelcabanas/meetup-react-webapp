import { AuthenticationResult } from "./authenticationResult";
import { LoginConsts } from "./login-consts";
import StorageRepository from '../repository/StorageRepository';

export class AuthenticationService {
    storageRepository: StorageRepository

    constructor(storageRepository: StorageRepository) {
        this.storageRepository = storageRepository
    }

    public authenticate(
        authenticationResult: AuthenticationResult,
        login: string) : void {
            this.storageRepository.save(LoginConsts.ACCESS_TOKEN_KEY, authenticationResult.access_token)
            this.storageRepository.save(LoginConsts.USERNAME_KEY, login)
            //window.localStorage.setItem(LoginConsts.ACCESS_TOKEN_KEY, authenticationResult.access_token);
            //window.localStorage.setItem(LoginConsts.USERNAME_KEY, login);
    }

    public static isAuthenticated() : boolean {
        return window.localStorage.getItem(LoginConsts.ACCESS_TOKEN_KEY) != null;
    }

    public static getUserId() : string | null {
        return window.localStorage.getItem(LoginConsts.USER_ID);
    }

    public static getUsername() : string | null {
        return window.localStorage.getItem(LoginConsts.USERNAME_KEY);
    }

    public static getAccessToken() : string | null {
        return window.localStorage.getItem(LoginConsts.ACCESS_TOKEN_KEY);
    }

    public static logOff() : void {
        window.localStorage.removeItem(LoginConsts.ACCESS_TOKEN_KEY);
    }

    public static setUserId(userId: string) : void {
        window.localStorage.setItem(LoginConsts.USER_ID, userId);
    }
}