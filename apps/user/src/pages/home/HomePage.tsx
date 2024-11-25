import EditorsPick from "./component/EditorsPick";
import Magazine from "./component/Magazine";
import TopArticle from "./component/TopArticle";

const HomePage = () => {
  return (
    <section className='mt-4 flex flex-col gap-10'>
      <TopArticle />
      <EditorsPick />
      <Magazine />
    </section>
  );
};

export default HomePage;
