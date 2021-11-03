import { render, screen } from "@testing-library/vue"
import Header from "../../src/components/Header.vue"

describe("Header", () => {
  it("should display header text", () => {
    render(Header)
    expect(screen.getByText("Mitra")).toBeVisible()
  })
})
