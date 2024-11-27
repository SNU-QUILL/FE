import { useGetQuery } from "@/api/query";
import SkeletonImage from "@/components/SkeletonImage";
import SectionHeader from "@/pages/home/component/SectionHeader";
import PhotoJournalItemSkeleton from "@/pages/home/component/skeleton/PhtoJournalItemSkeleton";
import { ArrowLeftIcon, ArrowRightIcon, Skeleton } from "@repo/ui";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@repo/ui/src/components/ui/carousel";
import { useEffect, useState } from "react";

const PhotoJournal = () => {
  const { data: photoJournals } = useGetQuery("/photoJournal/recent", {});
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!carouselApi) return;

    const interval = setInterval(() => {
      if (currentIndex === carouselApi.scrollSnapList().length - 1) {
        carouselApi.scrollTo(0);
      } else {
        carouselApi.scrollNext();
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [carouselApi, currentIndex]);

  carouselApi?.on("scroll", evt => {
    setCurrentIndex(evt.selectedScrollSnap());
  });

  const canScrollPrev = currentIndex !== 0;
  const canScrollNext = currentIndex !== (carouselApi?.scrollSnapList().length ?? 0) - 1;

  return (
    <div className='flex flex-col gap-4'>
      <SectionHeader title='Photojournals' />
      <Carousel setApi={setCarouselApi}>
        <CarouselContent>
          {photoJournals
            ? photoJournals.map((item, index) => (
                <CarouselItem key={index}>
                  <SkeletonImage
                    src={item.photoLink}
                    alt={item.description}
                    className='rounded-lg h-[750px]'
                  />
                  <p className='flex justify-center items-center text-2xl text-primary tracking-[1px]'>
                    {item.description}
                  </p>
                </CarouselItem>
              ))
            : Array.from({ length: 3 }).map((_, index) => (
                <CarouselItem key={index}>
                  <PhotoJournalItemSkeleton />
                </CarouselItem>
              ))}
        </CarouselContent>
      </Carousel>
      <div className='flex justify-center items-center gap-2'>
        <div
          className={`p-1 rounded-full border text-primary border-primary cursor-pointer hover:bg-subPrimary ${
            canScrollPrev ? "" : "invisible"
          }`}
          onClick={() => carouselApi?.scrollPrev()}
        >
          <ArrowLeftIcon className='w-4 h-4' />
        </div>
        {photoJournals?.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === currentIndex ? "bg-primary" : "bg-subPrimary"
            }`}
            onClick={() => carouselApi?.scrollTo(index)}
          />
        ))}
        <div
          className={`p-1 rounded-full text-primary border border-primary cursor-pointer hover:bg-subPrimary ${
            canScrollNext ? "" : "invisible"
          }`}
          onClick={() => carouselApi?.scrollNext()}
        >
          <ArrowRightIcon className='w-4 h-4' />
        </div>
      </div>
    </div>
  );
};

export default PhotoJournal;
