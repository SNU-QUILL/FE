import { CATEGORIES } from "@/constants/category";
import SectionHeader from "./SectionHeader";

const EditorsPick = () => {
  const editorsPick = [
    {
      id: 1,
      category: "features",
      subject:
        "Local Community Initiative Transforms Urban Spaces Into Green HavensLocal Community Initiative Transforms Urban Spaces Into Green HavensLocal Community Initiative Transforms Urban Spaces Into Green HavensLocal Community Initiative Transforms Urban Spaces Into Green Havens",
    },
    {
      id: 1,
      category: "snu_society",
      subject: "Local Community Initiative Transforms Urban Spaces Into Green Havens",
    },
    {
      id: 1,
      category: "arts_culture",
      subject: "Local Community Initiative Transforms Urban Spaces Into Green Havens",
    },
    {
      id: 1,
      category: "opinion",
      subject: "Local Community Initiative Transforms Urban Spaces Into Green Havens",
    },
  ];

  return (
    <div>
      <SectionHeader title="Editor's Pick" />
      <div className='flex justify-between h-[150px]'>
        {editorsPick.map(article => (
          <div
            key={article.id}
            className='flex flex-col justify-start w-[240px] gap-[5px] mt-[25px] p-2 cursor-pointer hover:rounded-lg hover:bg-gray-100'
          >
            <p className='text-primary text-[15px] font-[450]'>
              {CATEGORIES.find(category => category.value === article.category)?.label}
            </p>
            <p className='text-text text-xl font-[450] line-clamp-3'>{article.subject}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EditorsPick;
