import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const CommonLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname.split("/").pop() || "";

  return (
    <Tabs
      defaultValue={currentPath}
      className='w-full h-full flex pl-10'
      orientation='vertical'
      onValueChange={value => navigate(`/${value}`)}
    >
      <TabsList className='h-full flex-col gap-3 border-r border-primary rounded-none bg-white'>
        <TabsTrigger value='main' className='data-[state=active]:shadow-primary'>
          Main
        </TabsTrigger>
        <TabsTrigger value='user' className='data-[state=active]:shadow-primary'>
          User
        </TabsTrigger>
        <TabsTrigger value='logout' className='data-[state=active]:shadow-primary'>
          Logout
        </TabsTrigger>
      </TabsList>
      <div className='p-5'>
        <Outlet />
      </div>
    </Tabs>
  );
};
export default CommonLayout;
