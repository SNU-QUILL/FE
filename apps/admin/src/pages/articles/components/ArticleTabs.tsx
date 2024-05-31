import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ARTICLE_CATEGORY_ENUM } from "@/constants/article";
import { useState, useEffect } from "react";

interface ArticleTabs {
  initialTab: ARTICLE_CATEGORY_ENUM;
  onTabChange: (value: ARTICLE_CATEGORY_ENUM) => void;
}

const ArticleTabs = (props: ArticleTabs) => {
  const [tabValue, setTabValue] = useState(props.initialTab);

  useEffect(() => {
    setTabValue(props.initialTab);
  }, [props.initialTab]);

  const onTabChange = (value: ARTICLE_CATEGORY_ENUM) => {
    setTabValue(value);
    props.onTabChange(value);
  };

  return (
    <Tabs value={tabValue} onValueChange={value => onTabChange(value as ARTICLE_CATEGORY_ENUM)}>
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
