import { Editor } from "@toast-ui/react-editor";
import { useRef } from "react";
import "@toast-ui/editor/dist/toastui-editor.css";
import { useArticleDetailQuery } from "@/entities/article/api/article";
import { Button } from "@repo/ui/src/components/ui/button";
import { useFileUploadMutation } from "@/entities/file/api/file";
import { EFileType } from "@/entities/file/model/file";

interface IArticleEditorProps {
  id?: number;
  onChange: (html: string) => void;
}
const ArticleEditor = ({ id, onChange }: IArticleEditorProps) => {
  const editorRef = useRef<Editor>(null);

  const { data, isFetching } = useArticleDetailQuery(id);

  const { mutateAsync: uploadFileAsync } = useFileUploadMutation();

  const getHTMLContents = () => {
    const html = editorRef.current?.getInstance().getHTML();
    onChange(html);
  };

  const handleFileUpload = async (blob: Blob, callback: (url: string) => void) => {
    const response = await uploadFileAsync({ file: blob, fileType: EFileType.ARTICLE });
    callback(response.endPoint);
  };

  return isFetching ? null : (
    <div className='w-full h-full'>
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
        hooks={{
          addImageBlobHook: (blob: Blob, callback: (url: string) => void) => {
            handleFileUpload(blob, callback);
            return true;
          },
        }}
      />
      <div className='flex justify-end'>
        <Button onClick={getHTMLContents}>Get HTML</Button>
      </div>
    </div>
  );
};
export default ArticleEditor;
