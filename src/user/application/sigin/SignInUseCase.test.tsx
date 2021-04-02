import StorageRepository from '../../domain/StorageRepository';
import SignInUseCase from './SignInUseCase';


describe('Signin use case', () => {
    it('should save token in storage when authenticate successfully', (): void => { 
        const username = 'some username'
        const password = 'some password'
        const Mock = jest.fn<StorageRepository>(() => ({
            save: jest.fn(),
          }));
        const storageRepository = new Mock()

        const useCase = new SignInUseCase(storageRepository)

        useCase.execute(username, password)

        expect(storageRepository.save).toHaveBeenCalled()
        expect(storageRepository.save.mock.calls[0][0]).toBe('accessToken')
        expect(storageRepository.save.mock.calls[0][1]).toBe('testToken')        
    });
})