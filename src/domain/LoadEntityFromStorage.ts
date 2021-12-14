import Entity from "./Entity"

export default interface LoadEntityFromStorage<T extends Entity, U> {
  load: (store: U) => Promise<T>
}
