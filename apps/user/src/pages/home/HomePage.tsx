import PhotoJournal from "@/pages/home/component/PhotoJournal";
import EditorsPick from "./component/EditorsPick";
import Magazine from "./component/Magazine";
import TopArticle from "./component/TopArticle";
import SEO from "@/components/SEO";

const HomePage = () => {
  return (
    <>
      <SEO title='SNU QUILL' description='SNU Quill Home' />
      <section className='my-4 flex flex-col gap-10'>
        <TopArticle />
        <EditorsPick />
        <Magazine />
        <PhotoJournal />
      </section>
    </>
  );
};

export default HomePage;
