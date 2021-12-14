import Entity from "./Entity"
import LoadEntityFromStorage from "./LoadEntityFromStorage"
import SaveEntityToStorage from "./SaveEntityToStorage"

type Storage<T extends Entity, U> = SaveEntityToStorage<T> &
  LoadEntityFromStorage<T, U>

export default Storage
