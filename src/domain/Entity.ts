import { v4 as uuid } from "uuid"

const isEntity = (v: unknown): v is Entity => {
  return v instanceof Entity
}

export default abstract class Entity {
  public readonly id: string

  protected constructor() {
    this.id = uuid()
  }

  public equals(object?: Entity): boolean {
    if (object === null || object === undefined) {
      return false
    }

    if (this === object) {
      return true
    }

    if (!isEntity(object)) {
      return false
    }

    return this.id === object.id
  }
}
