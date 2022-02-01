import Contract from "../domain/Contract"
import Playbook from "../domain/Playbook"

export function makeFileBaseName(entity: Contract | Playbook) {
  return entity.title.toLowerCase().replace(/\s/g, "-")
}

export async function writeFile(
  fileHandle: FileSystemFileHandle,
  data: string
) {
  const writable: FileSystemWritableFileStream =
    await fileHandle.createWritable()
  await writable.write(data)
  await writable.close()
}
