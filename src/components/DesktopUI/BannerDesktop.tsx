import React from "react";
import { Skeleton } from "../ui/skeleton";

const SkeletonBanner = () => {
  return <Skeleton className="lg:w-[1100px] w-screen h-[300px] rounded-xl" />;
};
const BannerDesktop = () => {
  return <SkeletonBanner />;
};

export default BannerDesktop;
