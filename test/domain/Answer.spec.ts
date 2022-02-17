import { Choice, MultipleChoiceAnswer } from "../../src/domain/Answer"

describe("Answer", () => {
  describe("MultipleChoiceAnswer", () => {
    it("should provide selected choices in original order", () => {
      const answer = new MultipleChoiceAnswer([
        new Choice("foo"),
        new Choice("bar"),
      ])

      answer.setValue([1, 0])
      expect(answer.selected).toEqual(answer.choices)
    })
  })
})
