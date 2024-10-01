import EditorPick from "@/features/main/ui/EditorPick";
import Magazine from "@/features/main/ui/Magazine";
import PhotoJournal from "@/features/main/ui/PhotoJournal";
import TopArticle from "@/features/main/ui/TopArticle";

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
