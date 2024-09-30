import EditorPick from "@/pages/main/components/EditorPick";
import Magazine from "@/pages/main/components/Magazine";
import PhotoJournal from "@/pages/main/components/PhotoJournal";
import TopArticle from "@/pages/main/components/TopArticle";

const MainPage = () => {
  return (
    <div className='flex flex-col gap-10 w-full'>
      <div className='h-[250px] flex justify-center items-center text-primary font-bold'>
        THE SNU QUILL
      </div>
      <TopArticle />
      <EditorPick />
      <Magazine />
      {/* <VideoInfo /> */}
      <PhotoJournal />
    </div>
  );
};
export default MainPage;
