import mail from "../assets/mail_20.svg";
import github from "../assets/github_20.svg";
import { memo, useEffect, useRef } from "react";
export function AboutMe() {
  return (
    <div
      className="my-16 p-4 sm:p-10 lg:p-[100px] 2xl:grid 2xl:grid-cols-12 2xl:gap-8 2xl:px-[150px]"
      id="info"
    >
      <Header />
      <AboutMeLayout>
        <Image />
        <ContextGroup>
          <SubHeader />
          <Divider />
          <Context />
          <ActionDiv>
            <DownloadCVBtn />
            <ContactDiv>
              <a className="md:scale-1250" href="mailto:brynrgnzls@gmail.com">
                <img
                  src={mail}
                  className="m p-2 hover:cursor-pointer md:scale-125"
                  alt="mail icon"
                />
              </a>
              <a
                className="md:scale-125"
                target="_blank"
                href="https://github.com/brynrgnzls"
              >
                <img
                  src={github}
                  className="m p-2 hover:cursor-pointer md:scale-125"
                  alt="github icon"
                />
              </a>
            </ContactDiv>
          </ActionDiv>
        </ContextGroup>
      </AboutMeLayout>
    </div>
  );
}

function AboutMeLayout({ children }: ChildProp) {
  return (
    <div className="col-start-2 -col-end-2 flex flex-col gap-4 sm:flex-row md:gap-6 lg:gap-10 2xl:gap-14">
      {children}
    </div>
  );
}

function ContactDiv({ children }: ChildProp) {
  return (
    <div className="flex items-center justify-center gap-2">{children}</div>
  );
}

function Header() {
  return (
    <p className="mb-6 text-center text-2xl font-bold tracking-widest sm:text-3xl xl:text-4xl 2xl:col-span-full">
      ABOUT{" "}
      <span className="bg-acccentText bg-clip-text text-transparent">ME</span>
    </p>
  );
}

function Image() {
  const lazyBgRef = useRef<HTMLDivElement>(null);

  const lazyBGEffect = () => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      if (
        entries[0].isIntersecting &&
        !entries[0].target.className.includes("lazy-profile")
      ) {
        entries[0].target.className =
          entries[0].target.className.concat(" lazy-profile");
      }
    };

    const observer = new IntersectionObserver(observerCallback, {
      rootMargin: "150px",
    });

    if (lazyBgRef.current) observer.observe(lazyBgRef.current);

    return () => {
      observer.disconnect();
    };
  };

  useEffect(lazyBGEffect, []);

  return (
    <div className="relative h-64 after:absolute after:-z-10 after:size-full after:bg-accent after:blur-xl sm:h-auto sm:flex-1">
      <div
        ref={lazyBgRef}
        className="sm:pl-.5 absolute size-full overflow-clip rounded-lg bg-accent pl-1 pt-1 md:pl-2 md:pt-2"
      >
        <div className="absolute flex size-full items-center justify-center overflow-clip rounded-lg bg-cover bg-center"></div>
      </div>
    </div>
  );
}

function ActionDiv({ children }: ChildProp) {
  return <div className="mt-5 flex justify-between">{children}</div>;
}

function ContextGroup({ children }: ChildProp) {
  return <div className="flex-1">{children}</div>;
}

function SubHeader() {
  return (
    <p className="font-syne text-2xl font-bold tracking-wide md:text-3xl">
      My Misssion is to Build, Maintian and Develop Websites
    </p>
  );
}

function Divider() {
  return <div className="my-2.5 h-0.5 w-full bg-accent"></div>;
}

function Context() {
  return (
    <p className="text-sm text-gray-400 sm:text-base md:text-lg">
      My name is Bryan Gonzales based in Bataan, Phillippines. I am a graduating
      student this year 2024 candidate for Compter Science Major in Software
      Development Degree. I a have a deep passion for building a maintainable
      web application using the latest trending technologies and optimizing web
      applicaions. I am fond of self help boods particularly 48 Laws of Power
      and Atomic Habits. To unind and manage stress I play ukulele and piano. I
      love and welcome challanges that helps me refine my skills and foster my
      personal growth
    </p>
  );
}

function DownloadCVBtn() {
  return (
    <a
      href="https://cdn.fbsbx.com/v/t59.2708-21/453485200_2020017631773909_6015256868390068888_n.pdf/Gonzales-Bryan-CV.pdf?_nc_cat=107&ccb=1-7&_nc_sid=2b0e22&_nc_eui2=AeGUMynQticVei0lKLUT6NBZtaKrV5q6aau1oqtXmrppq6xY2NPRXjB2jakLUBFnhQG6rx6fAEQ6ZdIc-7dhPtLC&_nc_ohc=TyXNP7q6UGgQ7kNvgERmfU0&_nc_ht=cdn.fbsbx.com&oh=03_Q7cD1QF-45jNSU1ZhYhSmlrxh_RRDhbDcQI2QkXcabKnfOrMJw&oe=66AA4D99&dl=1"
      target="_blank"
      className="inline-block rounded-full border-2 border-solid bg-white px-5 py-2 text-sm text-dark-950 hover:cursor-pointer hover:border-white hover:bg-dark-950 hover:text-white sm:text-base"
    >
      Download CV
    </a>
  );
}

// Types
interface ChildProp {
  children: React.ReactNode;
}

export default memo(AboutMe);
