import StorageRepository from '../../domain/StorageRepository';
import AuthenticationService from '../../domain/AuthenticationService';
import SignInUseCase from './SignInUseCase';
import { AuthenticationResult } from '../../../login/services/authenticationResult';


describe('Signin use case', () => {
    it('should save token in storage when authenticate successfully', (): void => { 
        const username = 'some username'
        const password = 'some password'
        const storageRepositoryMock = jest.fn<StorageRepository>(() => ({
            save: jest.fn(),
          }));
        const storageRepository = new storageRepositoryMock()
        const authenticationServiceMock = jest.fn<AuthenticationService>(() => ({
            authenticate: jest.fn().mockReturnValue(new AuthenticationResult('testToken'))        
        }))
        const authenticationService = new authenticationServiceMock()
        const useCase = new SignInUseCase(authenticationService, storageRepository)

        useCase.execute(username, password)

        expect(storageRepository.save).toHaveBeenCalledTimes(2)
        expect(storageRepository.save.mock.calls[0][0]).toBe('accessToken')
        expect(storageRepository.save.mock.calls[0][1]).toBe('testToken') 
        expect(storageRepository.save.mock.calls[1][0]).toBe('username')
        expect(storageRepository.save.mock.calls[1][1]).toBe('some username')       
    });
})