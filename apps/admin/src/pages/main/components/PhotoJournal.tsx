import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import { ChevronLeftCircle, ChevronRightCircle } from "lucide-react";
import { useState } from "react";

const PhotoJournal = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  api?.on("scroll", () => {
    setCanScrollPrev(api?.canScrollPrev());
    setCanScrollNext(api?.canScrollNext());
  });

  return (
    <div>
      <div className='text-primary text-2xl'>Photo Journals</div>
      <Carousel setApi={setApi}>
        <CarouselContent>
          <CarouselItem>
            <PhotoJournalItem id='journal-1' />
          </CarouselItem>
          <CarouselItem>
            <PhotoJournalItem id='journal-2' />
          </CarouselItem>
          <CarouselItem>
            <PhotoJournalItem id='journal-3' />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
      <div className='flex justify-center gap-10 mt-2'>
        <ChevronLeftCircle
          size={32}
          color={canScrollPrev ? "hsl(var(--primary))" : "hsl(var(--secondary))"}
          className='cursor-pointer'
          onClick={() => api?.scrollPrev()}
        />
        <ChevronRightCircle
          size={32}
          color={canScrollNext ? "hsl(var(--primary))" : "hsl(var(--secondary))"}
          className='cursor-pointer'
          onClick={() => api?.scrollNext()}
        />
      </div>
    </div>
  );
};

const PhotoJournalItem = ({ id }: { id: string }) => {
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className='relative h-full'>
      <Input type='file' id={id} className='hidden' accept='image/*' onChange={handleFileChange} />
      <label
        htmlFor={id}
        className='flex items-center justify-center text-sm h-96 outline-primary outline-dashed m-[2px] bg-secondary hover:animate-pulse hover:bg-primary/30 hover:cursor-pointer rounded-md'
      >
        {preview && (
          <img src={preview} alt='Preview' className='w-full h-full object-cover rounded-md' />
        )}
        <div className='absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center'>
          <div>Edit photo journal</div>
        </div>
      </label>
    </div>
  );
};

export default PhotoJournal;
