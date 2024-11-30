import IconInput from "@/components/IconInput";
import { CATEGORIES } from "@/constants/category";
import { Button, MagnifyingGlassIcon } from "@repo/ui";
import { Link, useLocation, useNavigate, useSearchParams } from "react-router-dom";

export default function DesktopHeader() {
  const navigate = useNavigate();
  const location = useLocation();
  const selectedCategory = location.pathname.split("/")[2];
  const [searchParams] = useSearchParams();
  const searchText = searchParams.get("search-text");

  const goToSearchResultPage = (value: string) => {
    navigate(`/article/search/1?search-text=${value}`);
  };

  return (
    <header className='flex flex-col items-center gap-4 w-full mt-10'>
      <div className='flex flex-col items-center gap-2'>
        <Link to='/home'>
          <img src={"/logo.svg"} alt='logo' />
        </Link>
        <div className='text-primary text-xl tracking-[2.8px]'>THE SNU QUILL</div>
        <div className='text-primary text-sm tracking-[0.28px]'>since 2005</div>
      </div>
      <div className='flex w-[1140px] justify-end'>
        <IconInput
          wrapperClassName='border-b-primary border-b-4'
          icon={<MagnifyingGlassIcon className='text-primary w-8 h-8' />}
          inputProps={{
            className: "border-none focus-visible:ring-0 shadow-none",
            value: searchText || "",
          }}
          onEnter={goToSearchResultPage}
        />
      </div>
      <div className='flex justify-center w-full h-10 bg-primary'>
        <div className='flex justify-evenly items-center gap-2 w-[1140px]'>
          {CATEGORIES.map(category => (
            <Link to={`${category.link}/1`} key={category.value}>
              <Button
                variant='ghost'
                className={`text-white text-[16px] font-normal tracking-[0.8px] hover:bg-transparent ${
                  selectedCategory === category.value
                    ? "border-b-2 rounded-none border-b-white"
                    : ""
                }`}
              >
                {category.label}
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
