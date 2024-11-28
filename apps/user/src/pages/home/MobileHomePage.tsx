import SEO from "@/components/SEO";
import EditorsPick from "@/pages/home/component/EditorsPick";
import Magazine from "@/pages/home/component/Magazine";
import PhotoJournal from "@/pages/home/component/PhotoJournal";
import TopArticle from "@/pages/home/component/TopArticle";
import TopRecent from "@/pages/home/component/TopRecent";

const MobileHomePage = () => {
  return (
    <>
      <SEO title='SNU QUILL' description='SNU Quill Home' />
      <section className='my-4 flex flex-col gap-10'>
        <TopArticle />
        <TopRecent />
        <EditorsPick />
        <Magazine />
        <PhotoJournal />
      </section>
    </>
  );
};
export default MobileHomePage;
