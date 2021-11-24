import Playbook from "../domain/Playbook"
import PlaybookRepository from "../domain/PlaybookRepository"
import Module from "../domain/Module"
import { Step, StepType } from "../domain/Step"

const step11: Step = { id: 1, type: StepType.Text, text: "Schritt 1.1" }
const step12: Step = { id: 2, type: StepType.Text, text: "Schritt 1.2" }
const step13: Step = { id: 3, text: "Schritt 1.3" }

const step21: Step = { id: 1, type: StepType.Text, text: "Schritt 2.1" }
const step22: Step = { id: 2, text: "Schritt 2.2" }
const step23: Step = { id: 1, text: "Schritt 2.3" }

const step31: Step = { id: 1, text: "Schritt 3.1" }
const step32: Step = { id: 2, text: "Schritt 3.2" }
const step33: Step = { id: 3, text: "Schritt 3.3" }
const step34: Step = { id: 4, text: "Schritt 3.4" }

const module1: Module = new Module(1, "Rubrum")
const module2: Module = new Module(
  2,
  "Gegenstand und Bestandteile des Vertrags"
)
const module3: Module = new Module(3, "Gegenstand der Leistungen")

module1.addSteps(step11, step12, step13)
module2.addSteps(step21, step22, step23)
module3.addSteps(step31, step32, step33, step34)

const testPlaybook = new Playbook()
testPlaybook.addModules(module1, module2, module3)

const repository: PlaybookRepository = {
  load() {
    return testPlaybook
  },
  save() {
    // noop
  },
}

export default repository
