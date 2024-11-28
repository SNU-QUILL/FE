import PhotoJournal from "@/pages/home/component/PhotoJournal";
import EditorsPick from "./component/EditorsPick";
import Magazine from "./component/Magazine";
import TopArticle from "./component/TopArticle";
import SEO from "@/components/SEO";
import TopRecent from "@/pages/home/component/TopRecent";

const HomePage = () => {
  return (
    <>
      <SEO title='SNU QUILL' description='SNU Quill Home' />
      <section className='my-4 flex flex-col gap-10'>
        <div className='flex gap-8'>
          <TopArticle />
          <TopRecent />
        </div>
        <EditorsPick />
        <Magazine />
        <PhotoJournal />
      </section>
    </>
  );
};

export default HomePage;
