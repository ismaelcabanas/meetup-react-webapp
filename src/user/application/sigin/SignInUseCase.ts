import StorageRepository from "../../domain/StorageRepository";

class SignInUseCase {
    private storageRepository: StorageRepository

    constructor(storageRepository: StorageRepository) {
        this.storageRepository = storageRepository    
    }
    
    execute(username: string, password: string) {
        this.storageRepository.save('accessToken', 'testToken')
    }    
}

export default SignInUseCase;