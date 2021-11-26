import Playbook from "../domain/Playbook"
import PlaybookRepository from "../domain/PlaybookRepository"
import Module from "../domain/Module"
import Step, { StepType } from "../domain/Step"

const step11: Step = new Step("Schritt 1.1", StepType.Text)
const step12: Step = new Step("Schritt 1.2", StepType.Text)
const step13: Step = new Step("Schritt 1.3")

const step21: Step = new Step("Schritt 2.1", StepType.Text)
const step22: Step = new Step("Schritt 2.2")
const step23: Step = new Step("Schritt 2.3")

const step31: Step = new Step("Schritt 3.1")
const step32: Step = new Step("Schritt 3.2")
const step33: Step = new Step("Schritt 3.3")
const step34: Step = new Step("Schritt 3.4")

const module1: Module = new Module("Rubrum")
const module2: Module = new Module("Gegenstand und Bestandteile des Vertrags")
const module3: Module = new Module("Gegenstand der Leistungen")

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
