import MobileDrawer from "@/components/MobileDrawer";
import { MagnifyingGlassIcon } from "@repo/ui";
import { Link } from "react-router-dom";

const MobileHeader = () => {
  return (
    <div className='bg-secondary border-b border-primary h-14 flex justify-between items-center px-4 text-primary shadow-lg'>
      <MobileDrawer />
      <Link to='/' className='flex items-center gap-2'>
        <img src={"/logo.svg"} alt='logo' className='h-8' />
        <p className='text-2xl font-medium'>SNU QUILL</p>
      </Link>
      <MagnifyingGlassIcon className='h-8 w-8' />
    </div>
  );
};
export default MobileHeader;
