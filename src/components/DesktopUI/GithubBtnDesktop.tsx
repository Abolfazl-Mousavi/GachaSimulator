import React from "react";
import { Button, buttonVariants } from "../ui/button";
import { Github } from "lucide-react";
import Link from "next/link";
import Constants from "../../../constants.config";
const GithubBtnDesktop = () => {
  return (
    <Link href={Constants.githubRepo} title={Constants.projectName}>
      <Button variant="outline">
        <Github className="mr-2 h-4 w-4" /> Github Repo
      </Button>
    </Link>
  );
};

export default GithubBtnDesktop;
