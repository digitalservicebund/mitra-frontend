import { mount } from "@vue/test-utils"
import Header from "../../src/components/Header.vue"

describe("Header", () => {
  it("should display header text", () => {
    const wrapper = mount(Header)
    expect(wrapper.find("h1").text()).toEqual("Mitra")
  })
})
