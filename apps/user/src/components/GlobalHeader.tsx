import { CATEGORIES } from "@/constants/category";
import { Button, Input, MagnifyingGlassIcon } from "@repo/ui";
import { Link, useLocation } from "react-router-dom";

export default function GlobalHeader() {
  const location = useLocation();
  const selectedCategory = location.pathname.split("/")[2];

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
        <div className='flex items-center gap-2 border-b-primary border-b-4 w-60'>
          <MagnifyingGlassIcon className='text-primary w-8 h-8' />
          <Input className='border-none focus-visible:ring-0 shadow-none' />
        </div>
      </div>
      <div className='flex justify-center w-full h-10 bg-primary'>
        <div className='flex justify-evenly items-center gap-2 w-[1140px]'>
          {CATEGORIES.map(category => (
            <Link
              to={`${category.value === "archives" ? "/archives/1" : `/article/${category.value}/1`}`}
              key={category.value}
            >
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
