import Contract from "../domain/Contract"
import Storage from "../domain/Storage"
import { makeFileBaseName, writeFile } from "./FileStorageHelper"
import { createContract } from "./JSONMapper"
import { loadFile } from "./LoadFile"

const storage: Storage<Contract, File> = {
  async load(file: File) {
    const object = JSON.parse((await loadFile(file)) as string)
    return createContract(object).updateMetadata({
      createdAt: new Date(object.createdAt),
      savedAt: new Date(file.lastModified),
    })
  },

  async save(contract: Contract) {
    const writable = JSON.stringify({ contract, ...contract.metadata })

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
      await writeFile(fileHandle, writable)
    } else {
      await import("file-saver").then(({ default: FileSaver }) => {
        const blob = new Blob([writable], {
          type: "application/json;charset=utf-8",
        })
        FileSaver.saveAs(blob, `${makeFileBaseName(contract)}.json`)
      })
    }
  },
}

export default storage
