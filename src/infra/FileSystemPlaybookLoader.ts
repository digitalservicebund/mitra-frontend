import PlaybookLoader from "../usecases/LoadPlaybook"
import Playbook from "../domain/Playbook"
import Module from "../domain/Module"
import { Answer, Step, TextAnswerStep } from "../domain/Step"

const filePlaybookLoader: PlaybookLoader<File> = {
  load: async (file: File) => {
    const reader = new FileReader()
    reader.readAsText(file)
    const result = await new Promise((resolve) => {
      reader.onload = () => {
        resolve(reader.result)
      }
    })
    const jsonPlaybook = JSON.parse(result as string).playbook
    return createPlaybook(jsonPlaybook)
  },
}

function createPlaybook(jsonPlaybook: Playbook) {
  const modules: Module[] = jsonPlaybook.modules.map(createModule)
  return new Playbook(modules)
}

function createModule(jsonModule: Module) {
  const steps: Step<Answer>[] = jsonModule.steps.map(createStep)
  return new Module(jsonModule.text, steps)
}

function createStep(jsonStep: Step<Answer>) {
  return new TextAnswerStep(jsonStep.text)
}

export default filePlaybookLoader
