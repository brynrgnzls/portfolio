import fastify_48 from "../assets/fastify_48.svg";
import css_48 from "../assets/css_48.svg";
import express_light_48 from "../assets/express_light_48.svg";
import figma_48 from "../assets/figma_48.svg";
import github_48 from "../assets/github_48.svg";
import html_48 from "../assets/html_48.svg";
import javascript_48 from "../assets/javascript_48.svg";
import mongodb_48 from "../assets/mongodb_48.svg";
import mui_48 from "../assets/mui_48.svg";
import nodejs_48 from "../assets/nodejs_48.svg";
import postman_48 from "../assets/postman_48.svg";
import prisma_light_48 from "../assets/prisma_light_48.svg";
import react_48 from "../assets/react_48.svg";
import sass_48 from "../assets/sass_48.svg";
import tailwindcss_48 from "../assets/tailwindcss_48.svg";
import vitejs_48 from "../assets/vitejs_48.svg";
import webpack_48 from "../assets/webpack_48.svg";
import typescript_48 from "../assets/typescript_48.svg";

import fastify_64 from "../assets/fastify_64.svg";
import css_64 from "../assets/css_64.svg";
import express_light_64 from "../assets/express_light_64.svg";
import figma_64 from "../assets/figma_64.svg";
import github_64 from "../assets/github_64.svg";
import html_64 from "../assets/html_64.svg";
import javascript_64 from "../assets/javascript_64.svg";
import mongodb_64 from "../assets/mongodb_64.svg";
import mui_64 from "../assets/mui_64.svg";
import nodejs_64 from "../assets/nodejs_64.svg";
import postman_64 from "../assets/postman_64.svg";
import prisma_light_64 from "../assets/prisma_light_64.svg";
import react_64 from "../assets/react_64.svg";
import sass_64 from "../assets/sass_64.svg";
import tailwindcss_64 from "../assets/tailwindcss_64.svg";
import vitejs_64 from "../assets/vitejs_64.svg";
import webpack_64 from "../assets/webpack_64.svg";
import typescript_64 from "../assets/typescript_64.svg";
import { memo } from "react";

function Skills() {
  return (
    <div
      className="2xl my-10 p-4 sm:my-16 sm:px-10 lg:my-24 lg:px-[100px] 2xl:grid 2xl:grid-cols-12 2xl:px-[150px]"
      id="projects"
    >
      <Header />
      <div className="sm:hidden">
        <SkillsIconsLayout>
          <img loading="lazy" alt="html" src={html_48} />
          <img loading="lazy" alt="css" src={css_48} />
          <img loading="lazy" alt="javascript" src={javascript_48} />
          <img loading="lazy" alt="react" src={react_48} />
          <img loading="lazy" alt="tailwindcss" src={tailwindcss_48} />
          <img loading="lazy" alt="sass" src={sass_48} />
          <img loading="lazy" alt="mui" src={mui_48} />
          <img loading="lazy" alt="figma" src={figma_48} />
          <img loading="lazy" alt="vitejs" src={vitejs_48} />
          <img loading="lazy" alt="webpack" src={webpack_48} />
          <img loading="lazy" alt="typescript" src={typescript_48} />
          <img loading="lazy" alt="node" src={nodejs_48} />
          <img loading="lazy" alt="express" src={express_light_48} />
          <img loading="lazy" alt="fastify" src={fastify_48} />
          <img loading="lazy" alt="mongodb" src={mongodb_48} />
          <img loading="lazy" alt="prisma" src={prisma_light_48} />
          <img loading="lazy" alt="github" src={github_48} />
          <img loading="lazy" alt="postman" src={postman_48} />
        </SkillsIconsLayout>
      </div>
      <div className="hidden sm:block 2xl:col-start-2 2xl:-col-end-2">
        <SkillsIconsLayout>
          <img loading="lazy" alt="html" src={html_64} />
          <img loading="lazy" alt="css" src={css_64} />
          <img loading="lazy" alt="javascript" src={javascript_64} />
          <img loading="lazy" alt="react" src={react_64} />
          <img loading="lazy" alt="tailwindcss" src={tailwindcss_64} />
          <img loading="lazy" alt="sass" src={sass_64} />
          <img loading="lazy" alt="mui" src={mui_64} />
          <img loading="lazy" alt="figma" src={figma_64} />
          <img loading="lazy" alt="vitejs" src={vitejs_64} />
          <img loading="lazy" alt="webpack" src={webpack_64} />
          <img loading="lazy" alt="typescript" src={typescript_64} />
          <img loading="lazy" alt="nodejs" src={nodejs_64} />
          <img loading="lazy" alt="express" src={express_light_64} />
          <img loading="lazy" alt="fastify" src={fastify_64} />
          <img loading="lazy" alt="mongodb" src={mongodb_64} />
          <img loading="lazy" alt="prisma" src={prisma_light_64} />
          <img loading="lazy" alt="github" src={github_64} />
          <img loading="lazy" alt="postman" src={postman_64} />
        </SkillsIconsLayout>
      </div>
    </div>
  );
}

function SkillsIconsLayout({ children }: SkillsLayoutProps) {
  return (
    <div className="flex max-w-full flex-wrap justify-center gap-5 sm:gap-6 md:gap-7 lg:gap-8 xl:gap-9">
      {children}
    </div>
  );
}

function Header() {
  return (
    <p className="mb-4 text-lg font-semibold tracking-wider sm:text-3xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:col-start-2">
      Skills
    </p>
  );
}

// Types
interface SkillsLayoutProps {
  children: React.ReactNode;
}

export default memo(Skills);
