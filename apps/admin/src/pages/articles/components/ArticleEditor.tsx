import { Editor } from "@toast-ui/react-editor";
import { useRef } from "react";
import "@toast-ui/editor/dist/toastui-editor.css";
import { useArticleDetailQuery } from "@/hooks/queries/article";

interface IArticleEditorProps {
  id?: number;
  onChange: (html: string) => void;
}
const ArticleEditor = ({ id, onChange }: IArticleEditorProps) => {
  const editorRef = useRef<Editor>(null);

  const { data, isFetching } = useArticleDetailQuery(id);

  const getHTMLContents = () => {
    const html = editorRef.current?.getInstance().getHTML();
    onChange(html);
  };

  return isFetching ? null : (
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
      initialValue={data?.contents?.join("\n")}
      onChange={getHTMLContents}
    />
  );
};
export default ArticleEditor;
