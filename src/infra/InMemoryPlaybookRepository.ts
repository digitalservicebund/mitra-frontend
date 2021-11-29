import Playbook from "../domain/Playbook"
import PlaybookRepository from "../domain/PlaybookRepository"
import Module from "../domain/Module"
import { TextStep } from "../domain/Step"

const step11 = new TextStep("Schritt 1.1")
const step12 = new TextStep("Schritt 1.2")
const step13 = new TextStep("Schritt 1.3")

const step21 = new TextStep("Schritt 2.1")
const step22 = new TextStep("Schritt 2.2")
const step23 = new TextStep("Schritt 2.3")

const step31 = new TextStep("Schritt 3.1")
const step32 = new TextStep("Schritt 3.2")
const step33 = new TextStep("Schritt 3.3")
const step34 = new TextStep("Schritt 3.4")

const module1 = new Module("Rubrum")
const module2 = new Module("Gegenstand und Bestandteile des Vertrags")
const module3 = new Module("Gegenstand der Leistungen")

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
