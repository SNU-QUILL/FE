import { CATEGORIES } from "@/constants/category";
import { Button, Input, MagnifyingGlassIcon } from "@repo/ui";
import { useLocation, useNavigate } from "react-router-dom";

export default function GlobalHeader() {
  const navigate = useNavigate();
  const location = useLocation();
  const selectedCategory = location.pathname.split("/")[2];

  const goToHome = () => {
    navigate("/home");
  };

  const goToCategory = (category: string) => {
    navigate(`/article/${category}/1`);
  };

  return (
    <header className='flex flex-col items-center gap-4 w-full mt-10'>
      <div className='flex flex-col items-center gap-2'>
        <img src={"/logo.svg"} alt='logo' className='cursor-pointer' onClick={goToHome} />
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
            <Button
              key={category.value}
              variant='ghost'
              className={`text-white text-[16px] font-normal tracking-[0.8px] hover:bg-transparent ${
                selectedCategory === category.value ? "border-b-2 rounded-none border-b-white" : ""
              }`}
              onClick={() => goToCategory(category.value)}
            >
              {category.label}
            </Button>
          ))}
        </div>
      </div>
    </header>
  );
}
