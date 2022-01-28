import Playbook from "../../src/domain/Playbook"
import repository from "../../src/infra/LocalStoragePlaybookRepository"

describe("LocalStoragePlaybookRepository", () => {
  it("fetches playbooks with timestamp metadata", () => {
    const metadata = { createdAt: new Date(0), savedAt: new Date(0) }
    const playbook = new Playbook().updateMetadata(metadata)
    localStorage.setItem(playbook.id, JSON.stringify({ playbook, ...metadata }))

    // eslint-disable-next-line testing-library/await-async-query
    const { createdAt, savedAt } = repository.findById(playbook.id).metadata
    expect(createdAt).toBeInstanceOf(Date)
    expect(savedAt).toBeInstanceOf(Date)
  })
})
