import MobileFooter from "@/components/MobileFooter";
import { CATEGORIES } from "@/constants/category";
import {
  ChevronRightIcon,
  Drawer,
  DrawerContent,
  DrawerTrigger,
  HamburgerMenuIcon,
} from "@repo/ui";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const MobileDrawer = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    setIsOpen(false);
  }, [location]);
  return (
    <Drawer direction='left' open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger>
        <HamburgerMenuIcon className='h-8 w-8' />
      </DrawerTrigger>
      <DrawerContent className='flex flex-col justify-between h-full w-[80%] max-w-[320px] rounded-tl-none rounded-r-lg border-none overflow-y-auto scrollbar-hide'>
        <div className='flex flex-col'>
          <div className='p-4 text-lg font-bold text-primary'>The SNU QUILL</div>
          <div className='flex flex-col gap-4 p-4'>
            {CATEGORIES.map(category => (
              <Link
                key={category.value}
                to={`${category.link}/1`}
                className='text-lg font-medium border-b border-secondary w-full flex items-center justify-between'
              >
                <p>{category.label}</p>
                <ChevronRightIcon className='h-4 w-4' />
              </Link>
            ))}
          </div>
        </div>
        <MobileFooter />
      </DrawerContent>
    </Drawer>
  );
};
export default MobileDrawer;
