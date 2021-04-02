import { AuthenticationService } from './authenticationService'
import StorageRepository from '../repository/StorageRepository'
import { AuthenticationResult } from './authenticationResult'

//jest.mock('../repository/StorageRepository')

describe('Authentication service', () => {
    it('should set access token on storage', () => {                
        const Mock = jest.fn<StorageRepository>(() => ({
            save: jest.fn(),
          }));
        const storageRepositoryMock = new Mock();  
        const authenticationService = new AuthenticationService(storageRepositoryMock)
        const someLogin = 'someLogin'
        const someToken = 'someToken'
        const successfulAuthenticationResult = new AuthenticationResult(someToken)        

        authenticationService.authenticate(successfulAuthenticationResult, someLogin);
        
        expect(storageRepositoryMock.save).toBeCalledTimes(2)
    });
})