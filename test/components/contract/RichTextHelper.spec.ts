import { Editor } from "@tiptap/vue-3"
import RichTextEditorConfig from "../../../src/components/contract/RichTextEditorConfig"
import { editorContentAsAnswerValue } from "../../../src/components/contract/RichTextHelper"
import { RichTextAnswerStep } from "../../../src/domain/Step"

describe("RichTextHelper", () => {
  it("retrieves HTML content from editor given a step without template", () => {
    const editor = new Editor({ ...RichTextEditorConfig, content: "foo" })
    const step = new RichTextAnswerStep("foo")
    expect(editorContentAsAnswerValue(editor, step)).toEqual("<p>foo</p>")
  })

  it("retrieves text content without first enclosing paragraph from editor given a step with template", () => {
    const editor = new Editor({
      ...RichTextEditorConfig,
      content: "<p>foo<strong>bar</strong></p><p>baz</p>",
    })
    const step = new RichTextAnswerStep("foo", { produce: "Prefix: ${answer}" })
    expect(editorContentAsAnswerValue(editor, step)).toEqual(
      "foo<strong>bar</strong><p>baz</p>"
    )
  })

  it("fall back given no editor content", () => {
    const editor = new Editor({ ...RichTextEditorConfig })
    const step = new RichTextAnswerStep("foo")
    expect(editorContentAsAnswerValue(editor, step)).toEqual("")
  })
})
