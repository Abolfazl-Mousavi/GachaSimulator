import React from "react";
import Constants from "../../../constants.config";
import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex items-center">
      <Image
        src={"/assets/gifs/herta-kurukuru.gif"}
        width={60}
        height={60}
        alt="kurukuru-kururing"
      />
      {Constants.projectName}
    </div>
  );
};

export default Logo;
