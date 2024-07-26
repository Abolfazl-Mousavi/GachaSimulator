import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CarouselItem } from "@/components/ui/carousel";
import Image from "next/image";
const CustomCarouselItem = ({ g }: any) => {
  return (
    <CarouselItem id={g.imageSlug} className="basis-1/5 CarouselItems ">
      <Card
        className={`bg-transparent border-2 border-current border-separate border-spacing-1 ${
          g.isAvailable ? `cursor-pointer` : `cursor-not-allowed`
        }   rounded-lg overflow-hidden`}
        style={{ color: `${g.colorHex}` }}
      >
        <CardContent
          className={`aspect-square select-none p-1 flex items-center justify-center`}
        >
          <Image
            src={g.imageSlug}
            alt={g.name}
            width={320}
            height={320}
            className={!g.isAvailable ? `brightness-[.20]` : `brightness-100`}
          />
          {!g.isAvailable && (
            <span className="text-md  font-semibold absolute overflow-hidden rotate-45">
              comming soon ...
            </span>
          )}
        </CardContent>
      </Card>
    </CarouselItem>
  );
};

export default CustomCarouselItem;
