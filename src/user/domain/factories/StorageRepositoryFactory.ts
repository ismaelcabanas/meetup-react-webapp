import LocalStorageRepository from "../LocalStorageRepository";
import StorageRepository from "../StorageRepository";

export default class StorageRepositoryFactory {
  static localStorage(storage: Storage): StorageRepository {
    return new LocalStorageRepository(storage)
  }

}

