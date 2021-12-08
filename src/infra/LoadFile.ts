export async function loadFile(file: File) {
  const reader = new FileReader()
  reader.readAsText(file)
  return await new Promise((resolve) => {
    reader.onload = () => {
      resolve(reader.result)
    }
  })
}
