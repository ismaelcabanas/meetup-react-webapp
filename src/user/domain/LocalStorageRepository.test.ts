import LocalStorageRepository from './LocalStorageRepository'

describe('LocalStorageRepository ', () => {
    it('should put data on window local storage', (): void => { 
        Object.defineProperty(window, "localStorage", {
            value: {
              getItem: jest.fn(() => null),
              setItem: jest.fn(() => null)
            },
            writable: true
        });
        const sut = new LocalStorageRepository(window.localStorage)

        sut.save('someKey', 'someValue')

        expect(window.localStorage.setItem).toHaveBeenCalledWith(
            "someKey",
            "someValue"
          );
    });
})