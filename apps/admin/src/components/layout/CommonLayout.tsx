import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useMemo } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const CommonLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname.split("/").pop() || "";

  const tabItems = useMemo(() => {
    return [
      {
        label: "Main",
        value: "main",
      },
      {
        label: "User",
        value: "user",
      },
      {
        label: "Logout",
        value: "logout",
      },
    ];
  }, []);

  return (
    <Tabs
      defaultValue={currentPath}
      className='w-full h-full flex'
      orientation='vertical'
      onValueChange={value => navigate(`/${value}`)}
    >
      <TabsList className='h-full w-40 flex-col gap-3 border-r border-secondary rounded-none bg-white'>
        {tabItems.map(item => (
          <TabsTrigger
            key={item.label}
            value={item.value}
            className='w-full justify-start data-[state=active]:bg-primary data-[state=active]:text-secondary'
          >
            {item.label}
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
