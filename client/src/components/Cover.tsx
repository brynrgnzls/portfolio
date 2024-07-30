import { memo } from "react";
import pfp from "../assets/placeholder.avif";

function Cover() {
  return (
    <div
      className="flex h-screen w-screen flex-col items-center justify-center px-4 max-sm:pb-16 sm:px-10 md:gap-6 lg:flex-row-reverse 2xl:px-[150px]"
      id="home"
    >
      <Avatar />
      <ContextLayout>
        <Header />
        <Context />
        <ButtonContainer>
          <DownloadCVButton />
          <ViewProjectsButton />
        </ButtonContainer>
      </ContextLayout>
    </div>
  );
}

function Avatar() {
  return (
    <div className="glow-accent relative m-5 aspect-square w-56 rounded-full before:rounded-full after:absolute after:h-full after:w-full after:rounded-full after:bg-accent after:blur-lg after:content-[''] sm:mb-8 sm:w-72 md:w-1/2 md:before:rounded-lg md:after:rounded-lg md:max-xl:min-w-80 xl:max-w-[550px]">
      <img
        src={pfp}
        alt="Image of Bryan Gonzales"
        className="absolute z-10 h-full w-full rounded-full md:rounded-lg"
      />
    </div>
  );
}

function Header() {
  return (
    <p className="lg:leading mb-3 w-full text-4xl font-semibold leading-normal tracking-wider sm:mb-5 sm:text-5xl 2xl:text-6xl">
      Hello,{" "}
      <span className="bg-accent bg-clip-text text-transparent">
        I'm Bryan.
      </span>{" "}
      <br />
      Full-Stack Developer.
    </p>
  );
}

function Context() {
  return (
    <p className="mb-5 w-full text-sm text-gray-500 sm:mb-8 sm:text-base md:text-lg 2xl:text-xl">
      Aspiring Web Developer Based in the Phillipines. Enthusiastic both in
      front-end and back-end developement. Passionate for building fast and
      optimized websites using the latest technologies.
    </p>
  );
}

function ButtonContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-full justify-center gap-4 md:justify-start">
      {children}
    </div>
  );
}

function DownloadCVButton() {
  return (
    <div className="h-9 w-36 rounded-full border-2 border-solid bg-white text-sm text-dark-950 hover:border-white hover:bg-dark-950 hover:text-white sm:h-10 sm:text-base">
      <a
        href="https://cdn.fbsbx.com/v/t59.2708-21/453485200_2020017631773909_6015256868390068888_n.pdf/Gonzales-Bryan-CV.pdf?_nc_cat=107&ccb=1-7&_nc_sid=2b0e22&_nc_eui2=AeGUMynQticVei0lKLUT6NBZtaKrV5q6aau1oqtXmrppq6xY2NPRXjB2jakLUBFnhQG6rx6fAEQ6ZdIc-7dhPtLC&_nc_ohc=TyXNP7q6UGgQ7kNvgERmfU0&_nc_ht=cdn.fbsbx.com&oh=03_Q7cD1QF-45jNSU1ZhYhSmlrxh_RRDhbDcQI2QkXcabKnfOrMJw&oe=66AA4D99&dl=1"
        target="_blank"
        className="inline-block h-full w-full content-center text-center"
      >
        Download CV
      </a>
    </div>
  );
}

function ViewProjectsButton() {
  return (
    <div className="relative h-9 w-36 rounded-full bg-white bg-accent p-0.5 text-sm after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-full after:rounded-full after:bg-accent hover:after:blur-xl sm:h-10 sm:text-base">
      {" "}
      <a
        href="#"
        className="inline-block h-full w-full content-center rounded-full bg-dark-950 text-center"
      >
        View Projects
      </a>
    </div>
  );
}

function ContextLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-md:max-w-[550px] max-sm:max-w-sm md:w-full" >
      {children}
    </div>
  );
}

export default memo(Cover);
