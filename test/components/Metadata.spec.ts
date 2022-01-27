import { render, screen } from "@testing-library/vue"
import Metadata from "../../src/components/Metadata.vue"

describe("Metadata", () => {
  it("shows 'created at' date", () => {
    render(Metadata, {
      props: {
        createdAt: new Date(0),
      },
    })

    screen.getByText("01.01.1970")
  })

  it("shows 'saved at' date", () => {
    render(Metadata, {
      props: {
        savedAt: new Date(0),
      },
    })

    screen.getByText("01.01.1970")
  })
})
