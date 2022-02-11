import { setActivePinia, createPinia } from "pinia"
import piniaPersist from "pinia-plugin-persist"
import { createApp } from "vue"
import Contract from "../src/domain/Contract"
import Module from "../src/domain/Module"
import { TextAnswerStep } from "../src/domain/Step"
import { useSession } from "../src/session"

describe("session", () => {
  beforeAll(() => {
    const app = createApp({})
    const pinia = createPinia().use(piniaPersist)
    app.use(pinia)
    setActivePinia(pinia)
  })

  it("remembers contract without last edited step", () => {
    const session = useSession()
    const step = new TextAnswerStep("remembered")
    const contract = new Contract("foo", [new Module("bar", [step])])

    session.rememberContract(contract)

    expect(session.contract).toStrictEqual(contract)
    expect(session.lastEditedStep).toStrictEqual(step)
  })

  it("remembers contract along with last edited step", () => {
    const session = useSession()
    const step = new TextAnswerStep("remembered")
    const contract = new Contract("foo", [
      new Module("bar", [new TextAnswerStep("baz"), step]),
    ])

    session.rememberContract(contract, step)

    expect(session.contract).toStrictEqual(contract)
    expect(session.lastEditedStep).toStrictEqual(step)
  })

  it("hydrates contract instance from serialized sessionStorage", () => {
    sessionStorage.setItem(
      "session",
      '{"cache":[{"id":"3d324eca-06c2-4781-af52-705f49039d0d","title":"test contract","modules":[{"id":"930fe484-bd57-481d-8846-2d1a8b3e35db","title":"foo module","steps":[{"id":"67d574b0-2b77-42a5-bcd2-5ed600849adb","prompt":"bar","type":"TextAnswerStep","answer":{}}]}]},"c2623964-fb74-44ee-9384-b24e6decf11e",{"createdAt":"2022-02-11T18:16:35.691Z"}]}'
    )
    const session = useSession()
    expect(session.contract).toBeInstanceOf(Contract)
  })
})
