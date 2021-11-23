import "@testing-library/jest-dom"
import { config } from "@vue/test-utils"

config.global.directives = {
  focus() {
    /* stub */
  },
}
