import Contract from "../domain/Contract"
import ContractSaver from "../usecases/SaveContract"

function makeFileBaseName(contract: Contract) {
  return contract.title.toLowerCase().replace(/\s/g, "-")
}

async function writeFile(fileHandle: FileSystemFileHandle, data: string) {
  const writable: FileSystemWritableFileStream =
    await fileHandle.createWritable()
  await writable.write(data)
  await writable.close()
}

const saver: ContractSaver = {
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
    } else {
      await import("file-saver").then(({ default: FileSaver }) => {
        const blob = new Blob([JSON.stringify(contract)], {
          type: "application/json;charset=utf-8",
        })
        FileSaver.saveAs(blob, `${makeFileBaseName(contract)}.json`)
      })
    }
  },
}

export default saver
