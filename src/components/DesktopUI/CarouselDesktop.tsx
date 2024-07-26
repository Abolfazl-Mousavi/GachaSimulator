"use client";
import React, { useEffect } from "react";
import { Carousel, CarouselContent } from "@/components/ui/carousel";
import supportedGames from "@/lib/data/supportedGames";
import { IGame } from "@/lib/data/supportedGames";
import { useAppContext } from "@/context";
import CustomCarouselItem from "./CustomCarouselItem";

export function CarouselDesktop() {
  const { SelectedGameColor, SelectedGame } = useAppContext();
  const [selectedGameColor, setSelectedGameColor] = SelectedGameColor;
  const [selectedGame, setSelectedGame] = SelectedGame;

  useEffect(() => {
    let carouselItems = document.querySelectorAll("div.CarouselItems");

    carouselItems.forEach(function (item, idx) {
      //dblclick,mouseover,click event listeners for carousel (CUZ SHADCN DOESNT SUPPORT EVENT LISTENERS)
      item.addEventListener("dblclick", function () {
        supportedGames[idx].isAvailable &&
          (window.location.href = supportedGames[idx].slug);
      });
      item.addEventListener("mouseover", function () {
        setSelectedGameColor(supportedGames[idx].colorHex);
      });
      item.addEventListener("click", function () {
        setSelectedGame(supportedGames[idx]);
      });
    });
  }, []);

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="flex justify-center items-center w-1/2"
    >
      <CarouselContent>
        {supportedGames.map((g: IGame) => (
          <CustomCarouselItem key={g.id} g={g} />
        ))}
      </CarouselContent>
    </Carousel>
  );
}

export default CarouselDesktop;
