import PlaybookRepository from "../domain/PlaybookRepository"

const repository: PlaybookRepository = {
  findById: (id) => {
    console.log(`Looking up Playbook with id ${id}`)
    return { steps: ["First", "Second"] }
  },
}

export default repository
