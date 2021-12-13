export default interface Persistence<T> {
  load: (content: Blob) => Promise<T>
}
