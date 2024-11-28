import { CATEGORIES } from "@/constants/category";
import SectionHeader from "./SectionHeader";
import { Link } from "react-router-dom";
import { useGetQuery } from "@/api/query";
import EditosPickItemSkeleton from "@/pages/home/component/skeleton/EditosPickItemSkeleton";

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
          : Array.from({ length: 4 }).map((_, index) => <EditosPickItemSkeleton key={index} />)}
      </div>
    </div>
  );
};

export default EditorsPick;
