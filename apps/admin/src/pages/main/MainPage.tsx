import EditorPick from "@/pages/main/components/EditorPick";
import Magazine from "@/pages/main/components/Magazine";
import PhotoJournal from "@/pages/main/components/PhotoJournal";
import TopArticle from "@/pages/main/components/TopArticle";
import VideoInfo from "@/pages/main/components/VideoInfo";

const MainPage = () => {
  return (
    <div className='flex flex-col gap-10 w-[1140px]'>
      <div className='h-[250px] flex justify-center items-center text-primary font-bold'>
        THE SNU QUILL
      </div>
      <TopArticle />
      <EditorPick />
      <Magazine />
      <VideoInfo />
      <PhotoJournal />
    </div>
  );
};
export default MainPage;
