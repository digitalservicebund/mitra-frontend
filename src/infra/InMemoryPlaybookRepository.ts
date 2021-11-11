import Playbook from "../domain/Playbook"
import PlaybookRepository from "../domain/PlaybookRepository"

const testPlaybook: Playbook = {
  id: "test-playbook",
  name: "Testvertrag",
  sections: [
    { text: "Abschnitt 1", steps: [{ text: "Schritt 1.1" }] },
    { text: "Abschnitt 2", steps: [{ text: "Schritt 2.1" }] },
  ],
}

const repository: PlaybookRepository = {
  findById: (id) => {
    console.log(`Looking up Playbook with id ${id}`)
    return testPlaybook
  },
}

export default repository
