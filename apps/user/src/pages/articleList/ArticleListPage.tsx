import { useLocation } from "react-router-dom";
import ArticleListItem from "./component/ArticleListItem";
import { CATEGORIES } from "@/constants/category";
import ArticleListRecentAndMost from "./component/ArticleListRecentAndMost";

const ArticleListPage = () => {
  const selectedCategory = useLocation().pathname.split("/")[2];
  const selectedCategoryLabel = CATEGORIES.find(
    category => category.value === selectedCategory,
  )?.label;
  const articles = [
    {
      imgSrc: "/images/article1.jpg",
      subject: "첫 번째 기사 제목입니다",
      author: "홍길동",
      description:
        "첫 번째 기사의 내용입니다. 여기에는 기사의 간단한 설명이 들어갑니다. 독자들에게 유익한 정보를 전달하고자 합니다. 이 기사는 다양한 관점에서 주제를 다루고 있으며, 깊이 있는 통찰을 제공합니다.",
    },
    {
      imgSrc: "/images/article2.jpg",
      subject: "두 번째 기사 제목입니다",
      author: "김철수",
      description:
        "두 번째 기사의 내용입니다. 흥미로운 주제에 대한 설명이 포함됩니다. 최신 트렌드와 함께 실용적인 조언을 제공하는 내용으로 구성되어 있습니다. 독자들의 일상생활에 도움이 될 만한 팁들을 소개합니다.",
    },
    {
      imgSrc: "/images/article3.jpg",
      subject: "세 번째 기사 제목입니다",
      author: "이영희",
      description:
        "세 번째 기사의 내용입니다. 독자들이 관심을 가질만한 내용을 담고 있습니다. 전문가들의 의견과 함께 심층적인 분석을 제공합니다. 다양한 사례를 통해 주제에 대한 이해를 돕고 있습니다.",
    },
    {
      imgSrc: "/images/article4.jpg",
      subject: "네 번째 기사 제목입니다",
      author: "박민수",
      description:
        "네 번째 기사의 내용입니다. 현대 사회의 중요한 이슈를 다루고 있습니다. 다양한 관점에서 문제를 분석하고 해결책을 제시합니다. 독자들에게 새로운 시각을 제공하는 것을 목표로 합니다.",
    },
    {
      imgSrc: "/images/article5.jpg",
      subject: "다섯 번째 기사 제목입니다",
      author: "정수진",
      description:
        "다섯 번째 기사에서는 혁신적인 아이디어를 소개합니다. 미래 기술과 그 영향에 대해 심도있게 다루고 있습니다. 독자들에게 미래를 준비하는 통찰력을 제공하고자 합니다.",
    },
    {
      imgSrc: "/images/article6.jpg",
      subject: "여섯 번째 기사 제목입니다",
      author: "강민준",
      description:
        "여섯 번째 기사는 환경 문제에 대해 다룹니다. 지속가능한 발전을 위한 다양한 방안을 제시하고 있습니다. 우리 모두가 실천할 수 있는 구체적인 방법들을 소개합니다.",
    },
    {
      imgSrc: "/images/article7.jpg",
      subject: "일곱 번째 기사 제목입니다",
      author: "윤서연",
      description:
        "일곱 번째 기사에서는 건강한 라이프스타일을 제안합니다. 전문가들의 조언과 함께 실천 가능한 방법들을 소개합니다. 일상에서 쉽게 적용할 수 있는 건강관리 팁들을 다룹니다.",
    },
    {
      imgSrc: "/images/article8.jpg",
      subject: "여덟 번째 기사 제목입니다",
      author: "임재현",
      description:
        "여덟 번째 기사는 문화예술 분야의 최신 동향을 다룹니다. 다양한 예술가들의 작품과 그들의 이야기를 소개합니다. 현대 예술의 새로운 흐름과 의미를 분석합니다.",
    },
    {
      imgSrc: "/images/article9.jpg",
      subject: "아홉 번째 기사 제목입니다",
      author: "송지원",
      description:
        "아홉 번째 기사에서는 경제 트렌드를 분석합니다. 글로벌 시장의 변화와 그 영향에 대해 설명합니다. 독자들의 재테크에 도움이 될 만한 정보를 제공합니다.",
    },
    {
      imgSrc: "/images/article10.jpg",
      subject: "열 번째 기사 제목입니다",
      author: "조현우",
      description:
        "열 번째 기사는 교육의 미래에 대해 탐구합니다. 새로운 학습 방법과 교육 트렌드를 소개합니다. 미래 세대를 위한 교육 방향을 제시하고 있습니다.",
    },
  ];
  return (
    <section className='flex p-4 gap-10'>
      <div className='flex-grow'>
        <div className='text-primary text-[25px] font-medium'>{selectedCategoryLabel}</div>
        <div className='flex flex-col gap-4'>
          {articles.map(article => (
            <ArticleListItem key={article.imgSrc} {...article} />
          ))}
        </div>
      </div>
      <ArticleListRecentAndMost selectedCategory={selectedCategory} />
    </section>
  );
};

export default ArticleListPage;
