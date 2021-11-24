import Playbook from "../domain/Playbook"
import PlaybookRepository from "../domain/PlaybookRepository"

const testPlaybook: Playbook = {
  modules: [
    {
      text: "Rubrum",
      steps: [
        { text: "Schritt 1.1" },
        { text: "Schritt 1.2" },
        { text: "Schritt 1.3" },
      ],
    },
    {
      text: "Gegenstand und Bestandteile des Vertrags",
      steps: [
        { text: "Schritt 2.1" },
        { text: "Schritt 2.2" },
        { text: "Schritt 2.3" },
      ],
    },
    {
      text: "Gegenstand der Leistungen",
      steps: [
        { text: "Schritt 3.1" },
        { text: "Schritt 3.2" },
        { text: "Schritt 3.3" },
        { text: "Schritt 3.4" },
      ],
    },
  ],
}

const repository: PlaybookRepository = {
  load() {
    return testPlaybook
  },
  save() {
    // noop
  },
}

export default repository
