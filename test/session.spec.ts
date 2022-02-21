import { setActivePinia, createPinia } from "pinia"
import { createApp } from "vue"
import Contract from "../src/domain/Contract"
import Module from "../src/domain/Module"
import Playbook from "../src/domain/Playbook"
import { TextAnswerStep } from "../src/domain/Step"
import { persistence, useSession } from "../src/session"

describe("session", () => {
  const app = createApp({})

  beforeAll(() => {
    const pinia = createPinia().use(persistence)
    app.use(pinia)
    setActivePinia(pinia)

    sessionStorage.setItem(
      "session",
      `{
        "contracts":{"3d324eca-06c2-4781-af52-705f49039d0d":[{"id":"3d324eca-06c2-4781-af52-705f49039d0d","title":"test","modules":[{"id":"930fe484-bd57-481d-8846-2d1a8b3e35db","title":"foo module","steps":[{"id":"67d574b0-2b77-42a5-bcd2-5ed600849adb","prompt":"bar","type":"TextAnswerStep","answer":{}}]}],"metadata":{"createdAt":"2022-01-23T15:40:09.448Z"}},"c2623964-fb74-44ee-9384-b24e6decf11e"]},
        "playbooks":{"3d324eca-06c2-4781-af52-705f49039d0d":{"id":"3d324eca-06c2-4781-af52-705f49039d0d","title":"test","modules":[],"metadata":{"createdAt":"2022-01-23T15:40:09.448Z"}}}
       }`
    )
  })

  describe("contracts", () => {
    it("remembers contract without explicitly given last edited step", () => {
      const session = useSession()
      const step = new TextAnswerStep("remembered")
      const contract = new Contract("foo", [new Module("bar", [step])])

      session.rememberContract(contract)

      expect(session.contracts[contract.id][0]).toStrictEqual(contract)
      expect(session.lastEditedStep(contract.id)).toStrictEqual(step)
    })

    it("remembers contract along with given last edited step", () => {
      const session = useSession()
      const step = new TextAnswerStep("remembered")
      const contract = new Contract("foo", [
        new Module("bar", [new TextAnswerStep("baz"), step]),
      ])
      session.rememberContract(contract, step)
      expect(session.contracts[contract.id][0]).toStrictEqual(contract)
      expect(session.lastEditedStep(contract.id)).toStrictEqual(step)
    })

    it("hydrates contract instance from serialized sessionStorage", () => {
      const session = useSession()
      expect(
        session.contracts["3d324eca-06c2-4781-af52-705f49039d0d"][0]
      ).toBeInstanceOf(Contract)
    })
  })

  describe("playbooks", () => {
    it("remembers playbook", () => {
      const session = useSession()
      const playbook = new Playbook("foo")
      session.rememberPlaybook(playbook)
      expect(session.playbooks[playbook.id]).toStrictEqual(playbook)
    })

    it("hydrates playbook instance from serialized sessionStorage", () => {
      const session = useSession()
      expect(
        session.playbooks["3d324eca-06c2-4781-af52-705f49039d0d"]
      ).toBeInstanceOf(Playbook)
    })
  })
})
