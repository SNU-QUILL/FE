import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { startTransition, useEffect, useMemo, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const CommonLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname.split("/")[1];

  const [tabValue, setTabValue] = useState(currentPath);

  useEffect(() => {
    setTabValue(currentPath);
  }, [currentPath]);

  const tabItems = useMemo(() => {
    return {
      main: {
        label: "Main",
        route: "/main",
      },
      article: {
        label: "Article",
        route: "/article/features",
      },
      logout: {
        label: "Logout",
        route: "/logout",
      },
    };
  }, []);

  const onTabChange = (value: string) => {
    setTabValue(value);
    startTransition(() => navigate(tabItems[value as keyof typeof tabItems].route));
  };

  return (
    <div className='flex items-center w-full h-full overflow-hidden'>
      <Tabs value={tabValue} className='flex' orientation='vertical' onValueChange={onTabChange}>
        <TabsList className='h-full min-w-40 flex-col gap-3 border-r border-secondary rounded-none bg-white'>
          {Object.keys(tabItems).map(key => (
            <TabsTrigger
              key={key}
              value={key}
              className='w-full justify-start data-[state=active]:bg-primary data-[state=active]:text-secondary'
            >
              {tabItems[key as keyof typeof tabItems].label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      <div className='p-5 w-full h-full overflow-auto'>
        <Outlet />
      </div>
    </div>
  );
};
export default CommonLayout;
