import { Editor } from "@toast-ui/react-editor";
import { useRef } from "react";

interface IArticleEditorProps {
  onChange: (html: string) => void;
}
const ArticleEditor = ({ onChange }: IArticleEditorProps) => {
  const editorRef = useRef<Editor>(null);

  const getHTMLContents = () => {
    const html = editorRef.current?.getInstance().getHTML();
    onChange(html);
  };

  return (
    <Editor
      toolbarItems={[
        ["heading", "bold", "italic", "strike"],
        ["hr", "quote"],
        ["ul", "ol", "task", "indent", "outdent"],
        ["table", "image", "link"],
        ["code", "codeblock"],
      ]}
      initialEditorType='markdown'
      ref={editorRef}
      onChange={getHTMLContents}
    />
  );
};
export default ArticleEditor;
