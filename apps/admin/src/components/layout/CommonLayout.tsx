import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useMemo } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const CommonLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname.split("/")[1];

  console.log(currentPath);

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

  return (
    <Tabs
      value={currentPath}
      className='w-full h-full flex'
      orientation='vertical'
      onValueChange={key => navigate(tabItems[key as keyof typeof tabItems].route)}
    >
      <TabsList className='h-full w-40 flex-col gap-3 border-r border-secondary rounded-none bg-white'>
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
      <div className='p-5'>
        <Outlet />
      </div>
    </Tabs>
  );
};
export default CommonLayout;
