import Contract from "../domain/Contract"
import ContractRepository from "../domain/ContractRepository"

function makeFileBaseName(contract: Contract) {
  return contract.title.toLowerCase().replace(/\s/g, "-")
}

async function writeFile(fileHandle: FileSystemFileHandle, data: string) {
  const writable: FileSystemWritableFileStream =
    await fileHandle.createWritable()
  await writable.write(data)
  await writable.close()
}

const repository: ContractRepository = {
  load() {
    // noop
    return new Contract("", [])
  },
  async save(contract: Contract) {
    if (!!window.showSaveFilePicker) {
      const fileHandle: FileSystemFileHandle = await window.showSaveFilePicker({
        suggestedName: makeFileBaseName(contract),
        startIn: "desktop",
        types: [
          {
            accept: {
              "application/json": [".json"],
            },
          },
        ],
      })
      await writeFile(fileHandle, JSON.stringify(contract))
    }
  },
}

export default repository
