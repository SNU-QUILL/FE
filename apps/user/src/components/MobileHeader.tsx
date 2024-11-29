import IconInput from "@/components/IconInput";
import MobileDrawer from "@/components/MobileDrawer";
import { ChevronRightIcon, MagnifyingGlassIcon } from "@repo/ui";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const MobileHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [openSearchInput, setOpenSearchInput] = useState(false);

  const goToSearchResultPage = (value: string) => {
    navigate(`/article/search/1?search-text=${value}`);
  };

  useEffect(() => {
    setOpenSearchInput(false);
  }, [location]);

  return (
    <div className='relative bg-secondary border-b border-primary h-14 flex justify-between items-center px-4 text-primary shadow-lg'>
      <MobileDrawer />
      <Link to='/' className='flex items-center gap-2'>
        <img src={"/logo.svg"} alt='logo' className='h-8' />
        <p className='text-2xl font-medium'>SNU QUILL</p>
      </Link>
      <MagnifyingGlassIcon
        className='h-8 w-8 cursor-pointer'
        onClick={() => setOpenSearchInput(true)}
      />
      <IconInput
        wrapperClassName={`absolute right-0 top-0 z-[1] h-full w-full bg-white transition-transform duration-300 ${openSearchInput ? "translate-x-0" : "translate-x-full"}`}
        icon={<ChevronRightIcon className='h-8 w-8' onClick={() => setOpenSearchInput(false)} />}
        onEnter={goToSearchResultPage}
        inputProps={{
          placeholder: "Search...",
          className: "text-black",
          onBlur: () => setOpenSearchInput(false),
        }}
      />
    </div>
  );
};
export default MobileHeader;
