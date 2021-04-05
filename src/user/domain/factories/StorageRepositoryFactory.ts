import LocalStorageRepository from "../LocalStorageRepository";
import StorageRepository from "../StorageRepository";

export default class StorageRepositoryFactory {
  static localStorage(): StorageRepository {
    return new LocalStorageRepository()
  }

}

