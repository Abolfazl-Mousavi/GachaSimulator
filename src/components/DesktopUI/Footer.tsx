import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import Constants from "../../../constants.config";

const Footer = () => {
  return (
    <div className="fixed bottom-2">
      <Button variant={"link"} title="about the project">
        <Link href={"/about"}>about</Link>
      </Button>
      <Button variant={"link"}>
        <Link href={"/privacy-policy"}>privacy policy</Link>
      </Button>
      <Button variant={"link"} title="github repository">
        <Link href={Constants.githubRepo}>github</Link>
      </Button>
    </div>
  );
};

export default Footer;
