"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import supportedGames from "@/lib/data/supportedGames";
import { Game } from "@/lib/data/supportedGames";
import { useAppContext } from "@/context";

export function CarouselDesktop() {
  const { state, setState } = useAppContext();
  useEffect(() => {
    let carouselItems = document.querySelectorAll("div.CarouselItems");
    //dbl click event listener for carousel (CUZ SHADCN DOESNT SUPPORT EVENT LISTENERS)
    carouselItems.forEach(function (item, idx) {
      item.addEventListener("dblclick", function () {
        supportedGames[idx].isAvailable &&
          (window.location.href = supportedGames[idx].slug);
      });
      item.addEventListener("mouseover", function () {
        setState({ ...state, SelectedGameColor: supportedGames[idx].colorHex });
      });
    });
  }, []);

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="flex justify-center items-center px-36"
    >
      <CarouselContent>
        {supportedGames.map((g: Game) => (
          <CarouselItem
            key={g.id}
            id={g.imageSlug}
            className="basis-1/5 CarouselItems"
          >
            <Card
              className={`bg-transparent border-2 border-current border-separate border-spacing-1 ${
                g.isAvailable ? `cursor-pointer` : `cursor-not-allowed`
              }   rounded-lg overflow-hidden`}
              style={{ color: `${g.colorHex}` }}
            >
              <CardContent
                className={`aspect-square p-1 flex items-center justify-center`}
              >
                <Image
                  src={g.imageSlug}
                  alt={g.name}
                  width={320}
                  height={320}
                  className={
                    !g.isAvailable ? `brightness-[.20]` : `brightness-100`
                  }
                />
                {!g.isAvailable && (
                  <span className="text-lg font-semibold absolute overflow-hidden">
                    comming soon ...
                  </span>
                )}
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

export default CarouselDesktop;
