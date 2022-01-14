import {
  Choice,
  MultipleChoiceAnswer,
  MultipleChoiceAnswerStep,
  RichTextAnswerStep,
  SingleChoiceAnswer,
  SingleChoiceAnswerStep,
  TextAnswerStep,
  SheetAnswer,
  SheetAnswerStep,
} from "../../src/domain/Step"

describe("TextAnswerStep", () => {
  const step = new TextAnswerStep("foo")

  it("should produce a path", () => {
    expect(step.path).toEqual([step])
  })

  it("should be clonable", () => {
    expect(step.clone()).not.toEqual(step)
  })

  it("has a serializable `type` property", () => {
    expect(JSON.stringify(step)).toMatch(/"type":"TextAnswerStep"/)
  })
})

describe("RichTextAnswerStep", () => {
  const step = new RichTextAnswerStep("<p><strong>foo</strong></p>")

  it("should produce a path", () => {
    expect(step.path).toEqual([step])
  })

  it("should be clonable", () => {
    expect(step.clone()).not.toEqual(step)
  })

  it("has a serializable `type` property", () => {
    expect(JSON.stringify(step)).toMatch(/"type":"RichTextAnswerStep"/)
  })
})

describe("SingleChoiceAnswerStep", () => {
  const nestedStep = new SingleChoiceAnswerStep(
    "foo",
    new SingleChoiceAnswer([
      new Choice("foo", [new TextAnswerStep("foo")]),
      new Choice("bar", [new TextAnswerStep("bar")]),
    ])
  )

  const step = new SingleChoiceAnswerStep(
    "foo",
    new SingleChoiceAnswer([
      new Choice("foo", [new TextAnswerStep("foo")]),
      new Choice("bar", [nestedStep]),
    ])
  )

  it("should produce a path without a choice", () => {
    expect(step.path).toEqual([step])
  })

  it("should produce a path given a choice has been made", () => {
    step.answer.setValue(0)
    expect(step.path).toEqual([step, ...step.choices[0].path])
  })

  it("should produce a path including nested choices", () => {
    step.answer.setValue(1)
    nestedStep.answer.setValue(0)
    expect(step.path).toEqual([step, nestedStep, ...nestedStep.choices[0].path])
  })

  it("should be clonable", () => {
    expect(step.clone()).not.toEqual(step)
    expect(step.clone().answer).not.toEqual(step.answer)
    expect(step.clone().choices).not.toEqual(step.choices)
    expect(step.clone().choices).toHaveLength(step.choices.length)
  })

  it("has a serializable `type` property", () => {
    expect(JSON.stringify(step)).toMatch(/"type":"SingleChoiceAnswerStep"/)
  })
})

describe("MultipleChoiceAnswerStep", () => {
  const nestedStep = new MultipleChoiceAnswerStep(
    "foo",
    new MultipleChoiceAnswer([
      new Choice("foo", [new TextAnswerStep("foo")]),
      new Choice("bar", [new TextAnswerStep("bar")]),
    ])
  )

  const step = new MultipleChoiceAnswerStep(
    "foo",
    new MultipleChoiceAnswer([
      new Choice("foo", [new TextAnswerStep("foo")]),
      new Choice("bar", [nestedStep]),
    ])
  )

  it("should produce a path without a choice", () => {
    expect(step.path).toEqual([step])
  })

  it("should produce a path given a choice has been made", () => {
    step.answer.setValue([0])
    expect(step.path).toEqual([step, ...step.choices[0].path])
    step.answer.setValue([0, 1])
    expect(step.path).toEqual([
      step,
      ...step.choices[0].path,
      ...step.choices[1].path,
    ])
  })

  it("should produce a path including nested choices", () => {
    step.answer.setValue([1])
    nestedStep.answer.setValue([0])
    expect(step.path).toEqual([step, nestedStep, ...nestedStep.choices[0].path])
  })

  it("should provide selected choices in original order", () => {
    step.answer.setValue([1, 0])
    expect(step.selected).toEqual(step.choices)
  })

  it("should be clonable", () => {
    expect(step.clone()).not.toEqual(step)
    expect(step.clone().answer).not.toEqual(step.answer)
    expect(step.clone().choices).not.toEqual(step.choices)
    expect(step.clone().choices).toHaveLength(step.choices.length)
  })

  it("has a serializable `type` property", () => {
    expect(JSON.stringify(step)).toMatch(/"type":"MultipleChoiceAnswerStep"/)
  })
})

describe("SheetAnswerStep", () => {
  const row = { column1: "fuu", colum2: "bar", colum3: "baz" }
  const emptyRow = { column1: "", colum2: "", colum3: "" }
  const step = new SheetAnswerStep("foo", new SheetAnswer([row, emptyRow]))

  it("should be iniated with answer", () => {
    expect(step.answer.value).toEqual([row, emptyRow])
  })

  it("should produce a path", () => {
    expect(step.path).toEqual([step])
  })

  it("should be clonable", () => {
    expect(step.clone()).not.toEqual(step)
  })

  it("has a serializable `type` property", () => {
    expect(JSON.stringify(step)).toMatch(/"type":"SheetAnswerStep"/)
  })
})
