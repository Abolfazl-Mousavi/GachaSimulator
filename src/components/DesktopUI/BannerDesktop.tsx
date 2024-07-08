"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import supportedGames from "@/lib/data/supportedGames";
import { useAppContext } from "@/context";
import Link from "next/link";

const BannerDesktop = () => {
  const { SelectedGame } = useAppContext();
  const [selectedGame, setSelectedGame] = SelectedGame;
  return (
    <div className="relative w-4/5 h-[400px]">
      <Image
        className="rounded-lg object-cover bg-bottom"
        src={selectedGame.bannerImageSlug}
        alt={selectedGame.name}
        fill
      />
      <div className="absolute text-ellipsis float-left h-[100%] p-6 w-1/3 flex flex-col gap-3 bg-gradient-to-r from-muted rounded-lg  to-transparent">
        <h3 className="text-2xl">{selectedGame.name}</h3>
        <p>{selectedGame.description.substr(0, 350) + "..."}</p>
        <div>
          <Button variant={"link"}>
            <Link href={selectedGame.officialWebsite}>official Website</Link>
          </Button>
          <Button>
            <Link href={selectedGame.slug}>Try it Now</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BannerDesktop;
