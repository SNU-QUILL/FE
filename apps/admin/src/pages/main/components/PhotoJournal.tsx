import { usePhotoJournalList } from "@/hooks/queries/photoJournal";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@repo/ui";
import { Input } from "@repo/ui";
import { ChevronLeftCircle, ChevronRightCircle } from "lucide-react";
import { useState } from "react";

const PhotoJournal = () => {
  const { data } = usePhotoJournalList();
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  carouselApi?.on("scroll", () => {
    setCanScrollPrev(carouselApi?.canScrollPrev());
    setCanScrollNext(carouselApi?.canScrollNext());
  });

  return (
    <div>
      <div className='text-primary text-2xl'>Photo Journals</div>
      <Carousel setApi={setCarouselApi}>
        <CarouselContent>
          {data?.map(item => (
            <CarouselItem key={item.photographerId}>
              <PhotoJournalItem
                id={item.photographerId.toString()}
                photoLink={item.photoLink}
                description={item.description}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className='flex justify-center gap-10 mt-2'>
        <ChevronLeftCircle
          size={32}
          color={canScrollPrev ? "hsl(var(--primary))" : "hsl(var(--secondary))"}
          className='cursor-pointer'
          onClick={() => carouselApi?.scrollPrev()}
        />
        <ChevronRightCircle
          size={32}
          color={canScrollNext ? "hsl(var(--primary))" : "hsl(var(--secondary))"}
          className='cursor-pointer'
          onClick={() => carouselApi?.scrollNext()}
        />
      </div>
    </div>
  );
};

const PhotoJournalItem = ({
  id,
  photoLink,
  description,
}: {
  id: string;
  photoLink: string;
  description: string;
}) => {
  // const [preview, setPreview] = useState<string | null>(null);

  // const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   if (e.target.files && e.target.files[0]) {
  //     const file = e.target.files[0];
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       setPreview(reader.result as string);
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };

  return (
    <div className='relative h-[780px]'>
      <Input type='file' id={id} className='hidden' accept='image/*' />
      <label
        htmlFor={id}
        className='flex items-center justify-center text-sm outline-primary outline-dashed m-[2px] bg-secondary hover:animate-pulse hover:bg-primary/30 hover:cursor-pointer rounded-md'
      >
        <img src={photoLink} alt='Preview' className='w-full h-full object-cover rounded-md' />
      </label>
      <div className='text-primary text-2xl text-center'>
        <div>{description}</div>
      </div>
    </div>
  );
};

export default PhotoJournal;
