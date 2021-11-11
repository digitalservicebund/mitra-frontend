import PlaybookRepository from "./domain/PlaybookRepository"
import repository from "./infra/InMemoryPlaybookRepository"

export const makePlaybookRepository: () => PlaybookRepository = () => {
  return repository
}
