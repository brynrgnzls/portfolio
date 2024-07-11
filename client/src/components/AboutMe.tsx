import { ReactSVG } from "react-svg";

import pfp from "../assets/placeholder.png";
import mail from "../assets/mail_20.svg";
import github from "../assets/github_20.svg";
export default function AboutMe() {
  return (
    <div className="p-4 my-16 sm:p-10 md:p-[100px] 2xl:grid 2xl:grid-cols-12 2xl:gap-8 2xl:px-[150px]" id="info">
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
              <ReactSVG src={mail} />
              <ReactSVG src={github} />
            </ContactDiv>
          </ActionDiv>
        </ContextGroup>
      </AboutMeLayout>
    </div>
  );
}

function AboutMeLayout({ children }: ChildProp) {
  return (
    <div className="flex col-start-2 -col-end-2 flex-col gap-4 sm:flex-row md:gap-6 lg:gap-10 2xl:gap-14">
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
    <p className="mb-6 2xl:col-span-full text-center text-2xl font-bold tracking-widest sm:text-3xl">
      ABOUT <span className="bg-accent bg-clip-text text-transparent">ME</span>
    </p>
  );
}

function Image() {
  return (
    <div className="relative h-64 after:absolute after:-z-10 after:size-full after:bg-accent after:blur-xl sm:h-auto sm:flex-1">
      <div className="sm:pl-.5 absolute size-full overflow-clip rounded-lg bg-accent pl-1 pt-1 md:pl-2 md:pt-2">
        <div className="absolute flex size-full items-center justify-center overflow-clip rounded-lg bg-[url('https://scontent.fmnl8-2.fna.fbcdn.net/v/t1.15752-9/449760325_7706351189413273_101240846473927362_n.png?_nc_cat=103&ccb=1-7&_nc_sid=9f807c&_nc_ohc=3e4aKxF9Ot0Q7kNvgH1JnqX&_nc_ht=scontent.fmnl8-2.fna&oh=03_Q7cD1QHFABjjD0Be_FHMnWlLD9_ts9gQzC_DmaiuvfJVaH7Zgg&oe=66B77182')] bg-cover bg-center"></div>
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
    <p className="text-sm text-gray-500 sm:text-base md:text-lg">
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
    <div className="rounded-full border-2 border-solid bg-white px-5 py-2 text-sm text-dark-950 hover:cursor-pointer hover:border-white hover:bg-dark-950 hover:text-white sm:text-base">
      Download CV
    </div>
  );
}

// Types
interface ChildProp {
  children: React.ReactNode;
}
