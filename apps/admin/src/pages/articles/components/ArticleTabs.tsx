import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { EARTICLE_CATEGORY } from "@/constants/article";
import { useState, useEffect } from "react";

interface ArticleTabs {
  initialTab: EARTICLE_CATEGORY;
  onTabChange: (value: EARTICLE_CATEGORY) => void;
}

const ArticleTabs = (props: ArticleTabs) => {
  const [tabValue, setTabValue] = useState(props.initialTab);

  useEffect(() => {
    setTabValue(props.initialTab);
  }, [props.initialTab]);

  const onTabChange = (value: EARTICLE_CATEGORY) => {
    setTabValue(value);
    props.onTabChange(value);
  };

  return (
    <Tabs value={tabValue} onValueChange={value => onTabChange(value as EARTICLE_CATEGORY)}>
      <TabsList>
        {Object.values(EARTICLE_CATEGORY).map(category => (
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
