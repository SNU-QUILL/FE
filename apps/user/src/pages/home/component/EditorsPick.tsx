import { CATEGORIES } from "@/constants/category";
import SectionHeader from "./SectionHeader";
import { Link } from "react-router-dom";
import { useGetQuery } from "@/api/query";
import { Skeleton } from "@repo/ui";

const EditorsPickSkeleton = () => (
  <div className='flex flex-col justify-start gap-1 h-[150px] mt-[25px] xl:w-[240px]'>
    <Skeleton className='w-20 h-4' />
    <Skeleton className='w-40 h-6 xl:w-60' />
    <Skeleton className='w-40 h-6' />
    <Skeleton className='w-32 h-6' />
  </div>
);

const EditorsPick = () => {
  const { data: editorsPick } = useGetQuery("/editorPick", {});
  const categoryMappedEditorsPick = [
    {
      id: editorsPick?.featuresEditorPickList[0].id,
      category: CATEGORIES.find(category => category.value === "features")?.label,
      subject: editorsPick?.featuresEditorPickList[0].title,
    },
    {
      id: editorsPick?.snuSocietyEditorPickList[0].id,
      category: CATEGORIES.find(category => category.value === "snu_society")?.label,
      subject: editorsPick?.snuSocietyEditorPickList[0].title,
    },
    {
      id: editorsPick?.artsAndCultureEditorPickList[0].id,
      category: CATEGORIES.find(category => category.value === "arts_culture")?.label,
      subject: editorsPick?.artsAndCultureEditorPickList[0].title,
    },
    {
      id: editorsPick?.opinionEditorPickList[0].id,
      category: CATEGORIES.find(category => category.value === "opinion")?.label,
      subject: editorsPick?.opinionEditorPickList[0].title,
    },
  ];

  return (
    <div>
      <SectionHeader title="Editor's Pick" />
      <div className='grid grid-cols-2 xl:grid xl:grid-cols-4 xl:justify-between'>
        {editorsPick
          ? categoryMappedEditorsPick.map(article => (
              <Link
                key={article.id}
                className='flex flex-col justify-start h-[150px] gap-[5px] mt-[25px] p-2 rounded-lg hover:animate-hover-opacity xl:w-[240px]'
                to={`/article/${article.id}`}
              >
                <p className='text-primary text-[15px] font-[450]'>{article.category}</p>
                <p className='text-text text-xl font-[450] line-clamp-3'>{article.subject}</p>
              </Link>
            ))
          : Array.from({ length: 4 }).map((_, index) => <EditorsPickSkeleton key={index} />)}
      </div>
    </div>
  );
};

export default EditorsPick;
