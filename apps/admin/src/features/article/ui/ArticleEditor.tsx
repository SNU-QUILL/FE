import { Editor } from "@toast-ui/react-editor";
import { useCallback, useEffect, useRef, useState } from "react";
import "@toast-ui/editor/dist/toastui-editor.css";
import { useArticleDetailQuery, useArticleSaveMutation } from "@/entities/article/api/article";
import { useFileUploadMutation } from "@/entities/file/api/file";
import { EFileType } from "@/entities/file/model/file";
import { Button, Input } from "@repo/ui";
import { Label } from "@repo/ui/src/components/ui/label";
import { EARTICLE_CATEGORY } from "@/entities/article/model/article";

interface IArticleEditorProps {
  id?: number;
  category: EARTICLE_CATEGORY;
  onSave: () => void;
}

const ArticleEditor = ({ id, category, onSave }: IArticleEditorProps) => {
  const { data, isFetching } = useArticleDetailQuery(id);
  const { mutateAsync: uploadFileAsync } = useFileUploadMutation();
  const { mutateAsync: saveArticleAsync } = useArticleSaveMutation(id);
  const [title, setTitle] = useState<string>("");
  const [mainImage, setMainImage] = useState<string | null>(null);
  const editorRef = useRef<Editor>(null);
  const imagePreviewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (data?.pictureUrl) {
      setMainImage(data.pictureUrl);
    }
    if (data?.title) {
      setTitle(data.title);
    }
  }, [data]);

  const handleFileUpload = useCallback(
    async (blob: Blob, callback: (url: string) => void) => {
      const response = await uploadFileAsync({ file: blob, fileType: EFileType.ARTICLE });
      callback(response.endPoint);
    },
    [uploadFileAsync],
  );

  const handleMainImageChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = event => {
          const img = document.createElement("img");
          img.src = event.target?.result as string;
          img.style.maxWidth = "200px";
          img.style.maxHeight = "200px";
          imagePreviewRef.current?.appendChild(img);
        };
        reader.readAsDataURL(file);
        handleFileUpload(file, url => {
          setMainImage(url);
        });
      }
    },
    [handleFileUpload],
  );

  const onSubmit = async () => {
    const content = editorRef.current?.getInstance().getHTML();
    await saveArticleAsync({
      title: title,
      pictureUrl: mainImage ?? "",
      category: category.toUpperCase() as Uppercase<EARTICLE_CATEGORY>,
      contents: content,
      authorId: 1,
      invisible: true,
    });
    onSave?.();
  };

  if (isFetching) return null;

  return (
    <div className='w-full h-full overflow-y-auto scrollbar-hide'>
      <Label
        htmlFor='mainImage'
        className='flex items-center justify-center w-[200px] h-[200px] m-4 outline-dashed outline-primary bg-secondary hover:animate-pulse hover:bg-primary/30 hover:cursor-pointer rounded-md '
      >
        {!mainImage && <div>Upload Main Image</div>}
        {mainImage && <img src={mainImage} alt='main' className='w-[200px] h-[200px]' />}
      </Label>
      <Input
        id='mainImage'
        type='file'
        accept='image/*'
        onChange={handleMainImageChange}
        className='hidden'
      />
      <Input
        id='title'
        type='text'
        value={title}
        onChange={e => setTitle(e.target.value)}
        className='mb-4'
      />
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
        initialValue={data?.contents?.join("\n") ?? " "}
        hooks={{
          addImageBlobHook: (blob: Blob, callback: (url: string) => void) => {
            handleFileUpload(blob, callback);
            return true;
          },
        }}
      />
      <div className='flex justify-end pt-4'>
        <Button onClick={onSubmit}>Save</Button>
      </div>
    </div>
  );
};
export default ArticleEditor;
