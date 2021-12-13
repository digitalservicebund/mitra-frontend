import { TextAnswerStep } from "../../src/domain/Step"

describe("TextAnswerStep", () => {
  it("should be cloned along with answer object", () => {
    const step = new TextAnswerStep("foo")

    const cloned = step.clone()

    expect(cloned.answer).not.toEqual(step.answer)
  })
})
