import { Editor } from "@toast-ui/react-editor";
import { useCallback, useEffect, useRef } from "react";
import "@toast-ui/editor/dist/toastui-editor.css";
import { useArticleDetailQuery, useArticleSaveMutation } from "@/entities/article/api/article";
import { useFileUploadMutation } from "@/entities/file/api/file";
import { EFileType } from "@/entities/file/model/file";
import {
  Button,
  Form,
  FormField,
  FormItem,
  FormMessage,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@repo/ui";
import { Label } from "@repo/ui/src/components/ui/label";
import { EARTICLE_CATEGORY } from "@/entities/article/model/article";
import { useForm, useFormContext } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  articleSchema,
  ArticleSchema,
  defaultArticleSchema,
} from "@/entities/article/schema/article";
import { useAuthStore } from "@/shared/store/authStore";

interface IArticleEditorProps {
  id?: number;
  category: EARTICLE_CATEGORY;
  onSave: () => void;
}

const ArticleMainImageController = () => {
  const form = useFormContext();
  const { mutateAsync: uploadFileAsync } = useFileUploadMutation();

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
        handleFileUpload(file, url => {
          form.setValue("pictureUrl", url);
        });
      }
    },
    [handleFileUpload, form],
  );

  return (
    <FormField
      control={form.control}
      name='pictureUrl'
      render={({ field }) => (
        <FormItem className='m-1 mb-4'>
          <Label
            htmlFor='mainImage'
            className='flex items-center justify-center w-[300px] h-[300px] outline-dashed outline-primary bg-secondary hover:animate-pulse hover:bg-primary/30 hover:cursor-pointer rounded-md '
          >
            {field.value ? (
              <img src={field.value} alt='main' className='w-[300px] h-[300px]' />
            ) : (
              <div>Upload Main Image</div>
            )}
          </Label>
          <Input
            id='mainImage'
            type='file'
            accept='image/*'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              handleMainImageChange(e);
              field.onChange(e);
            }}
            className='hidden'
          />
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

const ArticleCategoryController = () => {
  const form = useFormContext();
  return (
    <FormField
      control={form.control}
      name='category'
      render={({ field }) => (
        <FormItem className='mb-4 mr-1 ml-1'>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <SelectTrigger>
              <SelectValue placeholder='Select a category' />
            </SelectTrigger>
            <SelectContent>
              {Object.values(EARTICLE_CATEGORY).map(category => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

const ArticleTitleController = () => {
  const form = useFormContext();
  return (
    <FormField
      control={form.control}
      name='title'
      render={({ field }) => (
        <FormItem className='mb-4 mr-1 ml-1'>
          <Input {...field} />
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

const ArticleContentsController = ({ initialValue }: { initialValue: string }) => {
  const editorRef = useRef<Editor>(null);
  const form = useFormContext();
  const { mutateAsync: uploadFileAsync } = useFileUploadMutation();

  const handleFileUpload = useCallback(
    async (blob: Blob, callback: (url: string) => void) => {
      const response = await uploadFileAsync({ file: blob, fileType: EFileType.ARTICLE });
      callback(response.endPoint);
    },
    [uploadFileAsync],
  );

  return (
    <FormField
      control={form.control}
      name='contents'
      render={({ field }) => (
        <FormItem className='h-full'>
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
            onChange={() => field.onChange(editorRef.current?.getInstance().getHTML())}
            hooks={{
              addImageBlobHook: (blob: Blob, callback: (url: string) => void) => {
                handleFileUpload(blob, callback);
                return true;
              },
            }}
          />
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

const ArticleEditor = ({ id, category, onSave }: IArticleEditorProps) => {
  const { data, isFetching } = useArticleDetailQuery(id);
  const { mutateAsync: saveArticleAsync } = useArticleSaveMutation(id);
  const authStore = useAuthStore();
  const form = useForm<ArticleSchema>({
    resolver: zodResolver(articleSchema),
    defaultValues: { ...defaultArticleSchema, category },
  });

  useEffect(() => {
    if (data?.pictureUrl) {
      form.setValue("pictureUrl", data.pictureUrl);
    }
    if (data?.title) {
      form.setValue("title", data.title);
    }
    if (data?.contents) {
      form.setValue("contents", data.contents);
    }
  }, [data, form]);

  const onSubmit = async (values: ArticleSchema) => {
    await saveArticleAsync({
      title: values.title,
      contents: values.contents,
      category: values.category.toUpperCase() as Uppercase<EARTICLE_CATEGORY>,
      authorId: authStore.getId(),
      pictureUrl: values.pictureUrl ?? "",
      invisible: true,
    });
    onSave?.();
  };

  if (isFetching) return null;

  return (
    <Form {...form}>
      <form
        className='w-full h-full overflow-y-auto scrollbar-hide'
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <ArticleMainImageController />
        <ArticleCategoryController />
        <ArticleTitleController />
        <ArticleContentsController initialValue={data!.contents} />
        <div className='flex justify-end pt-4'>
          <Button>Save</Button>
        </div>
      </form>
    </Form>
  );
};
export default ArticleEditor;
