import Contract from "../domain/Contract"
import ContractRepository from "../domain/ContractRepository"
import Playbook from "../domain/Playbook"

function makeFileBaseName(contract: Contract) {
  return contract.name.toLowerCase().replace(/\s/g, "-")
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
    return new Contract(new Playbook())
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
