import Playbook from "../domain/Playbook"
import Storage from "../domain/Storage"
import { makeFileBaseName, writeFile } from "./FileStorageHelper"
import { createPlaybook } from "./JSONMapper"
import { loadFile } from "./LoadFile"

const storage: Storage<Playbook, File> = {
  async load(file: File) {
    const object = JSON.parse((await loadFile(file)) as string)
    return createPlaybook(object).updateMetadata({
      createdAt: new Date(object.createdAt),
      savedAt: new Date(file.lastModified),
    })
  },

  async save(playbook: Playbook) {
    const writable = JSON.stringify({ playbook, ...playbook.metadata })

    if (!!window.showSaveFilePicker) {
      const fileHandle: FileSystemFileHandle = await window.showSaveFilePicker({
        suggestedName: makeFileBaseName(playbook),
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
        FileSaver.saveAs(blob, `${makeFileBaseName(playbook)}.json`)
      })
    }
  },
}

export default storage
