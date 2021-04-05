export default interface StorageRepository {
    save(key: string, value: string): void
}
