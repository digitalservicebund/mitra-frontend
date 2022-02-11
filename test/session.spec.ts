import { createTestingPinia } from "@pinia/testing"
import Contract from "../src/domain/Contract"
import Module from "../src/domain/Module"
import { TextAnswerStep } from "../src/domain/Step"
import { useSession } from "../src/session"

describe("session", () => {
  createTestingPinia()
  const session = useSession()

  it("remembers contract without last edited step", () => {
    const step = new TextAnswerStep("remembered")
    const contract = new Contract("foo", [new Module("bar", [step])])

    session.rememberContract(contract)

    expect(session.contract).toStrictEqual(contract)
    expect(session.lastEditedStep).toStrictEqual(step)
  })

  it("remembers contract along with last edited step", () => {
    const step = new TextAnswerStep("remembered")
    const contract = new Contract("foo", [
      new Module("bar", [new TextAnswerStep("baz"), step]),
    ])

    session.rememberContract(contract, step)

    expect(session.contract).toStrictEqual(contract)
    expect(session.lastEditedStep).toStrictEqual(step)
  })
})
