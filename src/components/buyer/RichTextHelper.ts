import type { Editor } from "@tiptap/vue-3"
import { RichTextAnswerStep } from "../../domain/Step"

// NOTE: If an instance of RichTextAnswerStep has a `produce` template
// other than the default, such as "Prefix... ${answer}", it's assumed
// to become a single sentence along with the editor's content (== ${answer})
// without a linebreak.
//
// But because the editor wraps all content with a `<p>` tag we have to
// take the editor content as plain text in case there's a customized template.
//
// We can't just put the prefix into the editor, as this will produce its own
// paragraph and thus a line break.
export const editorContentAsAnswerValue: (
  editor: Editor,
  step: RichTextAnswerStep
) => string = (editor, step) =>
  editor.isEmpty
    ? ""
    : step.produce !== "${answer}"
    ? editor.getHTML().replace("<p>", "").replace("</p>", "") // Replace only the first occurrence!
    : editor.getHTML()
