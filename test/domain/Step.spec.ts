import {
  Choice,
  SingleChoiceAnswer,
  SingleChoiceAnswerStep,
  TextAnswerStep,
} from "../../src/domain/Step"

describe("TextAnswerStep", () => {
  const step = new TextAnswerStep("foo")

  it("should produce a path", () => {
    expect(step.path).toEqual([step])
  })

  it("should be cloned along with answer object", () => {
    expect(step.clone()).not.toEqual(step)
    expect(step.clone().answer).not.toEqual(step.answer)
  })

  it("must allow `type` property to be serializable", () => {
    expect(JSON.stringify(step)).toMatch(/"type":"TextAnswerStep"/)
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
    expect(step.path).toEqual([step, ...step.answer.choices[0].path])
  })

  it("should produce a path including nested choices", () => {
    step.answer.setValue(1)
    nestedStep.answer.setValue(0)
    expect(step.path).toEqual([
      step,
      nestedStep,
      ...nestedStep.answer.choices[0].path,
    ])
  })

  it("should be cloned along with answer object", () => {
    expect(step.clone()).not.toEqual(step)
    expect(step.clone().answer).not.toEqual(step.answer)
    expect(step.clone().choices).not.toEqual(step.choices)
    expect(step.clone().choices).toHaveLength(step.choices.length)
  })
})
