import { Editor } from "@tiptap/vue-3"
import RichTextEditorConfig from "../../../src/components/buyer/RichTextEditorConfig"
import { editorContentAsAnswerValue } from "../../../src/components/buyer/RichTextHelper"
import { RichTextAnswerStep } from "../../../src/domain/Step"

describe("RichTextHelper", () => {
  it("retrieves HTML content from editor given a step without template", () => {
    const editor = new Editor({ ...RichTextEditorConfig, content: "foo" })
    const step = new RichTextAnswerStep("foo")
    expect(editorContentAsAnswerValue(editor, step)).toEqual("<p>foo</p>")
  })

  it("retrieves plain text content from editor given a step with template", () => {
    const editor = new Editor({ ...RichTextEditorConfig, content: "foo" })
    const step = new RichTextAnswerStep("foo", undefined, "Prefix: ${answer}")
    expect(editorContentAsAnswerValue(editor, step)).toEqual("foo")
  })

  it("fall back given no editor content", () => {
    const editor = new Editor({ ...RichTextEditorConfig })
    const step = new RichTextAnswerStep("foo")
    expect(editorContentAsAnswerValue(editor, step)).toEqual("")
  })
})
