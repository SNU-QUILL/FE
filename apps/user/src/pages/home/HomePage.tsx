import EditorsPick from "./component/EditorsPick";
import TopArticle from "./component/TopArticle";

const HomePage = () => {
  return (
    <section className='mt-4 flex flex-col gap-10'>
      <TopArticle />
      <EditorsPick />
    </section>
  );
};

export default HomePage;
