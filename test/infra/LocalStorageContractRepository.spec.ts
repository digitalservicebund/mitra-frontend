import Contract from "../../src/domain/Contract"
import repository from "../../src/infra/LocalStorageContractRepository"

describe("LocalStorageContractRepository", () => {
  it("fetches contracts with timestamp metadata", () => {
    const metadata = { createdAt: new Date(0), savedAt: new Date(0) }
    const contract = new Contract("foo", []).updateMetadata(metadata)
    localStorage.setItem(contract.id, JSON.stringify({ contract, ...metadata }))

    // eslint-disable-next-line testing-library/await-async-query
    const { createdAt, savedAt } = repository.findById(contract.id).metadata
    expect(createdAt).toBeInstanceOf(Date)
    expect(savedAt).toBeInstanceOf(Date)
  })
})
