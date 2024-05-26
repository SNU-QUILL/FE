import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ARTICLE_CATEGORY_ENUM } from "@/constants/article";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ArticleTabs = () => {
  const navigate = useNavigate();
  const { category } = useParams();

  const [tabValue, setTabValue] = useState(category);

  useEffect(() => {
    setTabValue(category);
  }, [category]);

  const onTabChange = (value: string) => {
    setTabValue(value);
    navigate(`/article/${value}`);
  };

  return (
    <Tabs value={tabValue} onValueChange={onTabChange}>
      <TabsList>
        {Object.values(ARTICLE_CATEGORY_ENUM).map(category => (
          <TabsTrigger
            key={category}
            value={category}
            className='min-w-20 data-[state=active]:bg-primary data-[state=active]:text-secondary'
          >
            {category}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
};

export default ArticleTabs;
