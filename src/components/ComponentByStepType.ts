import {
  Answer,
  MultipleChoiceAnswerStep,
  RichTextAnswerStep,
  SingleChoiceAnswerStep,
  Step,
  TextAnswerStep,
} from "../domain/Step"
import MultipleChoiceAnswerPreview from "./MultipleChoiceAnswerPreview.vue"
import MultipleChoiceAnswerEdit from "./MultipleChoiceAnswerStep.vue"
import RichTextAnswerPreview from "./RichTextAnswerPreview.vue"
import RichTextAnswerEdit from "./RichTextAnswerStep.vue"
import SingleChoiceAnswerPreview from "./SingleChoiceAnswerPreview.vue"
import SingleChoiceAnswerEdit from "./SingleChoiceAnswerStep.vue"
import TextAnswerPreview from "./TextAnswerPreview.vue"
import TextAnswerEdit from "./TextAnswerStep.vue"

const componentRegistry: { [key: string]: { [key: string]: object } } = {
  [TextAnswerStep.TYPE]: {
    edit: TextAnswerEdit,
    preview: TextAnswerPreview,
  },
  [RichTextAnswerStep.TYPE]: {
    edit: RichTextAnswerEdit,
    preview: RichTextAnswerPreview,
  },
  [SingleChoiceAnswerStep.TYPE]: {
    edit: SingleChoiceAnswerEdit,
    preview: SingleChoiceAnswerPreview,
  },
  [MultipleChoiceAnswerStep.TYPE]: {
    edit: MultipleChoiceAnswerEdit,
    preview: MultipleChoiceAnswerPreview,
  },
}

export const stepAnswerEditComponent = (step: Step<Answer>) => {
  const { edit: component } = componentRegistry[step.type]

  if (component === undefined) {
    console.error("Step type unknown, cannot render edit component", step)
    throw new Error("Step type unknown")
  }

  return component
}

export const stepAnswerPreviewComponent = (step: Step<Answer>) => {
  const { preview: component } = componentRegistry[step.type]

  if (component === undefined) {
    console.error("Step type unknown, cannot render preview component", step)
    throw new Error("Step type unknown")
  }

  return component
}
