import StorageRepository from "./StorageRepository";

export default class LocalStorageRepository implements StorageRepository {
    private storage: Storage;
    constructor (storage: Storage) {
        this.storage = storage
    }
    save(key: string, value: string): void {
        this.storage.setItem(key, value)
    }
}