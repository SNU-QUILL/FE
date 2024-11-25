import { useNavigate } from "react-router-dom";

const TopArticle = () => {
  const navigate = useNavigate();

  const topArticle = {
    id: 1,
    imgSrc: "https://picsum.photos/740/420",
    subject:
      "Dummy Article Title That Is Much Longer And More Descriptive About The Content Within",
    summary:
      "This is a much longer dummy article summary that provides more detailed information about what readers can expect from the full article. It goes into greater depth about the key points and main arguments, while still maintaining reader interest. The summary should give enough context for readers to understand the article's scope and decide if they want to read more.",
  };

  const recentArticles = [
    {
      id: 2,
      subject: "Breaking News: Major Scientific Breakthrough in Renewable Energy Research",
      summary:
        "Scientists have made a groundbreaking discovery in solar cell technology that could revolutionize renewable energy. The new method increases efficiency by 40% while reducing production costs significantly. This development could accelerate the global transition to sustainable energy sources and combat climate change more effectively.",
    },
    {
      id: 3,
      subject: "Local Community Initiative Transforms Urban Spaces Into Green Havens",
      summary:
        "A grassroots movement in the city has successfully converted abandoned lots into thriving community gardens. The project not only beautifies neighborhoods but also provides fresh produce to local residents. Community leaders report increased social cohesion and environmental awareness among participants.",
    },
    {
      id: 4,
      subject: "Tech Giants Announce Collaborative Effort to Advance AI Ethics",
      summary:
        "Leading technology companies have joined forces to establish new ethical guidelines for artificial intelligence development. The initiative aims to address concerns about AI bias, privacy, and transparency. Industry experts believe this collaboration could set new standards for responsible AI innovation.",
    },
  ];

  const onArticleClick = (id: number) => {
    navigate(`/article/${id}`);
  };

  return (
    <div className='flex gap-8'>
      <div
        className='flex flex-col justify-end w-[740px] h-[420px] shrink-0 cursor-pointer'
        style={{
          backgroundImage: `url(${topArticle.imgSrc})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        onClick={() => onArticleClick(topArticle.id)}
      >
        <div className='bg-gradient-to-t from-black/100 to-transparent'>
          <p className='text-white text-[32px] font-medium my-[10px] mx-[30px]'>
            {topArticle.subject}
          </p>
          <p className='text-white m-[10px_30px_40px_30px]'>{topArticle.summary}</p>
        </div>
      </div>

      <div className='flex flex-col gap-4 justify-between'>
        {recentArticles.map((article, index) => (
          <div
            key={article.subject}
            className={`flex-1 flex flex-col justify-center border-b border-gray-200 cursor-pointer hover:rounded-lg hover:bg-gray-100 ${index === recentArticles.length - 1 ? "border-b-0" : ""}`}
            onClick={() => onArticleClick(article.id)}
          >
            <p className='text-text text-xl font-[450] line-clamp-1'>{article.subject}</p>
            <p className='text-text text-[15px] line-clamp-1'>{article.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopArticle;
