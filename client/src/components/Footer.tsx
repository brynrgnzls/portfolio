import React, { memo } from "react";
import githubLogo from "../assets/github_38x38.svg";
import linkedinLogo from "../assets/linkedin_38x38.svg";

function Footer() {
  return (
    <footer
      className="bg-[#171717] px-4 pb-3 pt-6 sm:grid sm:grid-cols-8 sm:gap-y-5 sm:px-10"
      id="contact"
    >
      <Contact />
      <CopyrightLayout>
        <SocialLinks />
        <Divider />
        <Copyrigth />
      </CopyrightLayout>
    </footer>
  );
}

function Contact() {
  return (
    <div className="col-span-full mb-6 text-center">
      <p className="mb-1 inline-block bg-accent bg-clip-text font-syne font-bold tracking-widest text-transparent sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
        Get In Touch With Me
      </p>
      <p className="flicker-animation sm: font-syne text-2xl tracking-widest underline sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
        brynrgnzls@gmail.com
      </p>
    </div>
  );
}

function CopyrightLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="col-start-2 col-end-8 mt-auto flex flex-col gap-2 text-center">
      {children}
    </div>
  );
}

function SocialLinks() {
  return (
    <div className="flex justify-end gap-3">
      <a href="https://github.com/brynrgnzls">
        <img loading="lazy" alt="github logo" src={githubLogo} />
      </a>
      <a href="https://www.linkedin.com/in/bryan-gonzales-460605320/">
        <img loading="lazy" alt="github logo" src={linkedinLogo} />
      </a>
    </div>
  );
}

function Divider() {
  return <div className="h-0.5 w-full bg-accent" />;
}

function Copyrigth() {
  return (
    <p className="text-[11px] font-light text-gray-500">
      © 2024 Bryan Gonzales. All Rights Reserved.
    </p>
  );
}

export default memo(Footer);
