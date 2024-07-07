import React from "react";
import GithubBtnDesktop from "./GithubBtnDesktop";
import { ModeToggle } from "../ui/ModeToggle";
import Logo from "./Logo";

const NavDesktop = () => {
  return (
    <div className="top-2 container absolute flex justify-around ">
      <Logo />
      <div className="flex flex-row-reverse gap-1 justify-around">
        <GithubBtnDesktop />
        <ModeToggle />
      </div>
    </div>
  );
};

export default NavDesktop;
