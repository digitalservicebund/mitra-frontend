import PlaybookRepository from "../domain/PlaybookRepository"

const repository: PlaybookRepository = {
  find: (id) => {
    console.log(`Looking up Playbook with id ${id}`)
    return { steps: ["First", "Second"] }
  },
}

export default repository
