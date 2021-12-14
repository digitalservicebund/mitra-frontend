import Entity from "./Entity"

export default interface SaveEntityToStorage<T extends Entity> {
  save: (entity: T) => Promise<void>
}
