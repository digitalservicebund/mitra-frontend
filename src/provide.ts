import PlaybookRepository from "./domain/PlaybookRepository"
import repository from "./adapter/InMemoryPlaybookRepository"

export const makePlaybookRepository: () => PlaybookRepository = () => {
  return repository
}
