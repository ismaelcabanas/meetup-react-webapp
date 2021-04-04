import AuthenticationService from "../../domain/AuthenticationService";
import StorageRepository from "../../domain/StorageRepository";

class SignInUseCase {
    private authenticationService: AuthenticationService
    private storageRepository: StorageRepository

    constructor(authenticationService: AuthenticationService, storageRepository: StorageRepository) {
        this.authenticationService = authenticationService
        this.storageRepository = storageRepository    
    }
    
    execute(username: string, password: string) {
        const authResult = this.authenticationService.authenticate(username, password)

        this.storageRepository.save('accessToken', authResult.access_token)
        this.storageRepository.save('username', username)
    }    
}

export default SignInUseCase;