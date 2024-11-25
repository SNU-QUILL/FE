import { Navigate, useNavigate, useParams } from "react-router-dom";
import ArticleListItem from "./component/ArticleListItem";
import { CATEGORIES } from "@/constants/category";
import ArticleListRecentAndMost from "./component/ArticleListRecentAndMost";
import ArticleListPagination from "./component/ArticleListPagination";

const ArticleListPage = () => {
  const navigate = useNavigate();
  const selectedCategory = useParams().category!;
  const selectedCategoryLabel = CATEGORIES.find(
    category => category.value === selectedCategory,
  )?.label;
  const currentPage = Number(useParams().page!);

  const goToPreviousPage = () => {
    navigate(`/article/${selectedCategory}/${currentPage - 1}`);
  };

  const goToNextPage = () => {
    navigate(`/article/${selectedCategory}/${currentPage + 1}`);
  };

  const maxPages = 2;
  const articles = [
    {
      imgSrc: "/images/article1.jpg",
      subject: "Special Series Exploring Solutions to Various Problems in Modern Society",
      author: "John Smith",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
    },
    {
      imgSrc: "/images/article2.jpg",
      subject: "The Future of Living: AI and Big Data in the Fourth Industrial Revolution",
      author: "Emma Wilson",
      description:
        "Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam massa nisl quis neque.",
    },
    {
      imgSrc: "/images/article3.jpg",
      subject: "Expert Guidelines for Eco-friendly Living in the Climate Crisis Era",
      author: "Michael Green",
      description:
        "Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero sed dignissim lacinia nunc.",
    },
    {
      imgSrc: "/images/article4.jpg",
      subject: "New Professional Competencies Required in the Digital Transformation Era",
      author: "Sarah Johnson",
      description:
        "Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra.",
    },
    {
      imgSrc: "/images/article5.jpg",
      subject: "Changed Daily Life and New Lifestyle Trends in the Post-COVID Era",
      author: "David Chen",
      description:
        "Cras metus. Sed aliquet risus a tortor. Integer id quam. Morbi mi. Quisque nisl felis, venenatis tristique, dignissim in, ultrices sit amet, augue. Proin sodales libero eget ante. Nulla quam. Aenean laoreet. Vestibulum nisi lectus.",
    },
    {
      imgSrc: "/images/article6.jpg",
      subject: "Sustainable Development and Environmental Protection for Future Generations",
      author: "Rachel Brown",
      description:
        "Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu.",
    },
    {
      imgSrc: "/images/article7.jpg",
      subject: "Expert's Customized Wellbeing Life Guide for Modern People",
      author: "James Wilson",
      description:
        "Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis.",
    },
    {
      imgSrc: "/images/article8.jpg",
      subject: "New Cultural Arts Trends and the Future Direction of Art in the Digital Age",
      author: "Lisa Park",
      description:
        "Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna.",
    },
    {
      imgSrc: "/images/article9.jpg",
      subject: "Expert Investment Strategies for Individual Investors in Global Economic Crisis",
      author: "Robert Lee",
      description:
        "Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis.",
    },
    {
      imgSrc: "/images/article10.jpg",
      subject: "In-depth Analysis of Innovative Changes in Future Education",
      author: "Emily Davis",
      description:
        "Vestibulum tincidunt malesuada tellus. Ut ultrices ultrices enim. Curabitur sit amet mauris. Morbi in dui quis est pulvinar ullamcorper. Nulla facilisi. Integer lacinia sollicitudin massa. Cras metus. Sed aliquet risus a tortor. Integer id quam.",
    },
  ];

  if (currentPage > maxPages) {
    return <Navigate to={`/article/${selectedCategory}/1`} replace />;
  }

  return (
    <section className='flex p-4 gap-10'>
      <div className='flex-grow overflow-hidden'>
        <div className='text-primary text-[25px] font-medium'>{selectedCategoryLabel}</div>
        <div className='flex flex-col gap-4'>
          {articles.map(article => (
            <ArticleListItem key={article.imgSrc} {...article} />
          ))}
        </div>
        <ArticleListPagination
          currentPage={currentPage}
          totalPages={maxPages}
          onPreviousClick={goToPreviousPage}
          onNextClick={goToNextPage}
        />
      </div>
      <ArticleListRecentAndMost selectedCategory={selectedCategory} />
    </section>
  );
};

export default ArticleListPage;
