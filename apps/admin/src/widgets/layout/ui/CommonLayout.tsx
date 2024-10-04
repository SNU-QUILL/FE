import { Tabs, TabsList, TabsTrigger } from "@repo/ui";
import { ITab } from "@/widgets/layout/model/tab";
import { useAuthStore } from "@/shared/store/authStore";
import { useGlobalConfirmStore } from "@/shared/store/globalConfirm";
import { startTransition, useEffect, useMemo, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const CommonLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { openDialog, closeDialog } = useGlobalConfirmStore();
  const { logout } = useAuthStore();
  const currentPath = location.pathname.split("/")[1];

  const [tabValue, setTabValue] = useState(currentPath);

  useEffect(() => {
    setTabValue(currentPath);
  }, [currentPath]);

  const tabItems: ITab[] = useMemo(
    () => [
      {
        label: "Main",
        value: "main",
        route: "/main",
      },
      {
        label: "Article",
        value: "article",
        route: "/article/features",
      },
      {
        label: "Misc",
        value: "misc",
        route: "/misc",
      },
      {
        label: "Logout",
        value: "logout",
      },
    ],
    [],
  );

  const onTabChange = (value: string) => {
    if (value === "logout") {
      openDialog({
        title: "Logout",
        description: "Are you sure you want to logout?",
        onConfirm: () => {
          closeDialog();
          logout();
        },
        onCancel: () => {
          closeDialog();
        },
      });
      return;
    }

    setTabValue(value);
    startTransition(() => navigate(tabItems.find(item => item.value === value)!.route!));
  };

  return (
    <div className='flex items-center w-full h-full overflow-hidden'>
      <Tabs
        value={tabValue}
        className='flex h-full'
        orientation='vertical'
        onValueChange={onTabChange}
      >
        <TabsList className='h-full min-w-40 flex-col gap-3 border-r border-secondary rounded-none bg-white'>
          {tabItems.map(tabItem => (
            <TabsTrigger
              key={tabItem.value}
              value={tabItem.value}
              className='w-full justify-start data-[state=active]:bg-primary data-[state=active]:text-secondary'
            >
              {tabItem.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      <div className='w-full overflow-auto h-full'>
        <div className='p-5 w-[1140px] h-full m-auto'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default CommonLayout;
