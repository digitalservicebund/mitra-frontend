export default interface Storage<T, U> {
  load: (loadable: U) => Promise<T>
  save: (persistable: T) => Promise<void>
}
