import { Editor } from "@toast-ui/react-editor";
import { useRef } from "react";
import "@toast-ui/editor/dist/toastui-editor.css";

interface IArticleEditorProps {
  id?: number;
  onChange: (html: string) => void;
}
const ArticleEditor = ({ id, onChange }: IArticleEditorProps) => {
  const editorRef = useRef<Editor>(null);

  const getHTMLContents = () => {
    const html = editorRef.current?.getInstance().getHTML();
    onChange(html);
  };

  return (
    <Editor
      ref={editorRef}
      toolbarItems={[
        ["heading", "bold", "italic", "strike"],
        ["hr", "quote"],
        ["ul", "ol", "task", "indent", "outdent"],
        ["table", "image", "link"],
      ]}
      initialEditType='wysiwyg'
      hideModeSwitch
      height='100%'
      initialValue={id}
      onChange={getHTMLContents}
    />
  );
};
export default ArticleEditor;
