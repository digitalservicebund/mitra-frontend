import { TextAnswerStep } from "../../src/domain/Step"

describe("TextAnswerStep", () => {
  it("should be cloned along with answer object", () => {
    const step = new TextAnswerStep("foo")
    expect(step.clone().answer).not.toEqual(step.answer)
  })

  it("must allow `type` property to be serializable", () => {
    const step = new TextAnswerStep("foo")
    expect(JSON.stringify(step)).toMatch(/"type":"TextAnswerStep"/)
  })
})
