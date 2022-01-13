import { shallowEqual } from "shallow-equal-object"

export default abstract class ValueObject {
  public equals(object?: this): boolean {
    if (object === null || object === undefined) {
      return false
    }

    return shallowEqual(this, object)
  }
}
