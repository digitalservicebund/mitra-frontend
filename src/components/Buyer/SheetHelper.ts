import { SheetAnswerStep, SheetAnswer, Row } from "../../domain/Step"

export const getColumns = (step: SheetAnswerStep): string[] => {
  return Object.keys(step.answer.value[0])
}

export const rowHasValues = (row: Row): boolean => {
  return Object.values(row).some((value) => value != "")
}

export const removeEmptyRows = (answer: SheetAnswer): Row[] => {
  return answer.value.filter((row) => rowHasValues(row))
}
