import SectionHeader from "@/pages/home/component/SectionHeader";
import { ArrowLeftIcon, ArrowRightIcon } from "@repo/ui";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@repo/ui/src/components/ui/carousel";
import { useState } from "react";

const PhotoJournal = () => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  carouselApi?.on("scroll", evt => {
    setCurrentIndex(evt.selectedScrollSnap());
  });

  const canScrollPrev = currentIndex !== 0;
  const canScrollNext = currentIndex !== (carouselApi?.scrollSnapList().length ?? 0) - 1;

  const carouselData = [
    {
      imgSrc: "https://picsum.photos/1140/640",
      description:
        "A powerful image capturing protesters marching for climate action, their signs and voices unified in demanding environmental justice and policy changes.",
    },
    {
      imgSrc: "https://picsum.photos/1140/640",
      description:
        "An intimate portrait of healthcare workers during the pandemic, showing both their exhaustion and determination as they care for patients in the ICU.",
    },
    {
      imgSrc: "https://picsum.photos/1140/640",
      description:
        "Stunning aerial photography reveals the devastating impact of deforestation in the Amazon rainforest, highlighting the urgent need for conservation efforts.",
    },
  ];

  return (
    <div className='flex flex-col gap-4'>
      <SectionHeader title='Photojournals' />
      <Carousel setApi={setCarouselApi}>
        <CarouselContent>
          {carouselData.map((item, index) => (
            <CarouselItem key={index}>
              <img src={item.imgSrc} alt={item.description} className='rounded-lg' />
              <p className='text-2xl text-primary tracking-[1px]'>{item.description}</p>
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
        {carouselData.map((_, index) => (
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
