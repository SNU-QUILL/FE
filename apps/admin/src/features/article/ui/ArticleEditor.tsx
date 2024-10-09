import { Editor } from "@toast-ui/react-editor";
import { useRef } from "react";
import "@toast-ui/editor/dist/toastui-editor.css";
import { useArticleDetailQuery } from "@/entities/article/api/article";
import { useFileUploadMutation } from "@/entities/file/api/file";
import { EFileType } from "@/entities/file/model/file";

interface IArticleEditorProps {
  id?: number;
}
const ArticleEditor = ({ id }: IArticleEditorProps) => {
  const editorRef = useRef<Editor>(null);

  const { data, isFetching } = useArticleDetailQuery(id);

  const { mutateAsync: uploadFileAsync } = useFileUploadMutation();

  const printHTMLContents = () => {
    const html = editorRef.current?.getInstance().getHTML();
    console.log(html);
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
        onChange={printHTMLContents}
        hooks={{
          addImageBlobHook: (blob: Blob, callback: (url: string) => void) => {
            handleFileUpload(blob, callback);
            return true;
          },
        }}
      />
    </div>
  );
};
export default ArticleEditor;
