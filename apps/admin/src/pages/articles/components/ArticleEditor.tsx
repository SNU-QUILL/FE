import { Editor } from "@toast-ui/react-editor";
import { useRef } from "react";
import "@toast-ui/editor/dist/toastui-editor.css";

interface IArticleEditorProps {
  initialValue?: string;
  onChange: (html: string) => void;
}
const ArticleEditor = ({ initialValue, onChange }: IArticleEditorProps) => {
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
      initialValue={initialValue}
      onChange={getHTMLContents}
    />
  );
};
export default ArticleEditor;
