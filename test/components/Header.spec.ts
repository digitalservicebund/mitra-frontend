import { render } from "@testing-library/vue"
import Header from "../../src/components/Header.vue"

describe("Header", () => {
  it("should display header text", () => {
    const { getByText } = render(Header)
    getByText("Mitra")
  })
})
