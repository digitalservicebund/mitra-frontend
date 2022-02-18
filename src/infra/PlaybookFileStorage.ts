import Playbook from "../domain/Playbook"
import Storage from "../domain/Storage"
import { makeFileBaseName, writeFile } from "./FileStorageHelper"
import { createPlaybook } from "./JSONMapper"
import { loadFile } from "./LoadFile"

const storage: Storage<Playbook, File> = {
  async load(file: File) {
    const { playbook: playbookDTO } = JSON.parse(
      (await loadFile(file)) as string,
      (key, value) => (key === "createdAt" ? new Date(value) : value)
    )
    return createPlaybook(playbookDTO).updateMetadata({
      savedAt: new Date(file.lastModified),
    })
  },

  async save(playbook: Playbook) {
    const writable = JSON.stringify({ playbook }, (key, value) =>
      key === "savedAt" ? undefined : value
    )

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
