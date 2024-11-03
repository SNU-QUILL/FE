import { useCallback, useEffect } from "react";
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
import { CKEditor } from "@ckeditor/ckeditor5-react";
import DecoupledEditor from "@ckeditor/ckeditor5-build-decoupled-document";
import { useGlobalDialogStore } from "@/shared/store/globalDialog";
import { MemberList } from "@/features/member/ui/MemberList";
import useConfirmDialog from "@/features/dialog/hooks/useConfirmDialog";
import { DIALOG_MESSAGE } from "@/shared/constants/message";
import { useMemberListQuery } from "@/entities/member/api/member";

interface IArticleEditorProps {
  id?: number;
  invisible?: boolean;
  category: EARTICLE_CATEGORY;
  onSave: () => void;
}

const ArticleMainImageController = () => {
  const form = useFormContext<ArticleSchema>();
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
  const form = useFormContext<ArticleSchema>();
  return (
    <FormField
      control={form.control}
      name='category'
      render={({ field }) => (
        <FormItem className='mb-4 mr-1 ml-1'>
          <Select onValueChange={field.onChange} value={field.value}>
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

const ArticleAuthorController = () => {
  const form = useFormContext<ArticleSchema>();
  const { openDialog, closeDialog } = useGlobalDialogStore();
  const dialogId = "author-select";

  const { data: memberMap } = useMemberListQuery();
  const members = Object.values(memberMap ?? {}).flat();

  return (
    <FormField
      control={form.control}
      name='authorId'
      render={({ field }) => {
        const member = members.find(member => member.id === field.value);
        return (
          <FormItem className='mb-4 mr-1 ml-1'>
            <Button
              type='button'
              variant='outline'
              className='h-fit'
              onClick={() =>
                openDialog({
                  id: dialogId,
                  title: "Select Author",
                  contents: (
                    <MemberList
                      onSelect={member => {
                        field.onChange(member.id);
                        closeDialog(dialogId);
                      }}
                    />
                  ),
                })
              }
            >
              {!member ? (
                <div>Select Author</div>
              ) : (
                <>
                  <img
                    src={member.memberPictureUrl}
                    alt='author'
                    className='w-10 h-10 rounded-full mr-2'
                  />
                  <div>
                    <div className='text-sm font-bold'>{member.name}</div>
                    <div className='text-xs text-gray-500'>{member.role}</div>
                    <div className='text-xs text-gray-500'>{member.email}</div>
                  </div>
                </>
              )}
            </Button>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
};

const ArticleTitleController = () => {
  const form = useFormContext<ArticleSchema>();
  return (
    <FormField
      control={form.control}
      name='title'
      render={({ field }) => (
        <FormItem className='mb-4 mr-1 ml-1'>
          <Input {...field} placeholder='Title' />
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

const ArticleContentsController = () => {
  const form = useFormContext<ArticleSchema>();
  const { mutateAsync: uploadFileAsync } = useFileUploadMutation();

  const handleFileUpload = useCallback(
    async (blob: Blob) => {
      const response = await uploadFileAsync({ file: blob, fileType: EFileType.ARTICLE });
      return response.endPoint;
    },
    [uploadFileAsync],
  );

  const customUploadAdapter = (loader: any) => ({
    upload: async () => {
      const file = await loader.file;
      const url = await handleFileUpload(file);
      return { default: url };
    },
  });

  function uploadPlugin(editor: any) {
    editor.plugins.get("FileRepository").createUploadAdapter = (loader: any) =>
      customUploadAdapter(loader);
  }

  return (
    <FormField
      control={form.control}
      name='contents'
      render={({ field }) => (
        <FormItem className='mb-4 mr-1 ml-1'>
          <div className='document-editor'>
            <div className='document-editor__toolbar'></div>
            <div className='document-editor__editable'>
              <CKEditor
                editor={DecoupledEditor}
                onReady={editor => {
                  const toolbarContainer = document.querySelector(".document-editor__toolbar");
                  if (toolbarContainer) {
                    toolbarContainer.appendChild(editor.ui.view.toolbar.element!);
                  }
                }}
                config={{
                  extraPlugins: [uploadPlugin],
                  toolbar: [
                    "heading",
                    "|",
                    "bold",
                    "italic",
                    "underline",
                    "strikethrough",
                    "|",
                    "link",
                    "imageUpload",
                    "|",
                    "bulletedList",
                    "numberedList",
                    "|",
                    "indent",
                    "outdent",
                    "|",
                    "undo",
                    "redo",
                  ],
                }}
                data={field.value}
                onChange={(_, editor) => {
                  const data = editor.getData();
                  field.onChange(data);
                }}
              />
            </div>
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

const ArticleEditor = ({ id, invisible, category, onSave }: IArticleEditorProps) => {
  const { data, isFetching } = useArticleDetailQuery(id);
  const { mutateAsync: saveArticleAsync } = useArticleSaveMutation(id);
  const { openConfirmDialog, closeConfirmDialog } = useConfirmDialog();
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
    if (data?.author.id) {
      form.setValue("authorId", data.author.id);
    }
    if (data?.contents) {
      form.setValue("contents", data.contents);
    }
  }, [data, form]);

  const onSubmit = async (values: ArticleSchema) => {
    openConfirmDialog({
      title: DIALOG_MESSAGE.CONFIRM_EDIT_ARTICLE_TITLE,
      contents: DIALOG_MESSAGE.CONFIRM_EDIT_ARTICLE_MESSAGE,
      onConfirm: async () => {
        await saveArticleAsync({
          title: values.title,
          contents: values.contents,
          category: values.category.toUpperCase() as Uppercase<EARTICLE_CATEGORY>,
          authorId: values.authorId,
          pictureUrl: values.pictureUrl ?? "",
          invisible: invisible ?? true,
        });
        closeConfirmDialog();
        onSave?.();
      },
    });
  };

  if (isFetching) return null;

  return (
    <Form {...form}>
      <form
        className='w-full h-full overflow-y-auto scrollbar-hide'
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <ArticleMainImageController />
        <ArticleAuthorController />
        <ArticleCategoryController />
        <ArticleTitleController />
        <ArticleContentsController />
        <div className='flex justify-end'>
          <Button>Save</Button>
        </div>
      </form>
    </Form>
  );
};
export default ArticleEditor;
