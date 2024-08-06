import { memo, useEffect } from "react";

function Timeline() {
  const observeEffect = () => {
    const timeline = document.querySelector(".timeline")!;
    const time = document.querySelectorAll(".time")!;

    const timelineObserver = new IntersectionObserver(
      (entries, observer) => {
        if (entries[0].isIntersecting) {
          timeline.classList.add("timeline-animation");
          time.forEach((time) => time.classList.add("time-animation"));
          observer.disconnect();
        }
      },
      { rootMargin: "-175px" },
    );
    timelineObserver.observe(timeline);

    return () => {
      timelineObserver.disconnect();
    };
  };

  useEffect(observeEffect, []);
  return (
    <div className="mx-4 my-10 sm:mx-10 sm:my-16 md:mx-[100px] lg:my-24 2xl:mx-[150px] 2xl:grid 2xl:grid-cols-12">
      <Header />
      <div className="timeline timeline-container invisible relative after:absolute after:-top-0 after:left-0 after:h-full after:w-1 after:bg-accent sm:after:left-1/2 2xl:col-start-2 2xl:-col-end-2 sm:[&>div:nth-child(even)]:ml-auto sm:[&>div:nth-child(odd)]:pl-0 sm:[&>div:nth-child(odd)]:pr-12 sm:[&>div:nth-child(odd)_.timepointer]:-right-[16px] sm:[&>div:nth-child(odd)_.timepointer]:left-auto sm:[&>div:nth-child(odd)_.timepointer]:rotate-[135deg] sm:[&>div:nth-child(odd)_.timepointer]:border-secondary">
        <Time
          title="On the Job Training"
          date="Oct. 11 2023 - Dec. 04, 2023"
          context="Work as a trainee at the Provincial’s  office Iskolar ng Bataan. Along with co-trainee we built a simple system with the guidance of our trainer. I learned to communicate, work ethic and collaborate with a fellow programmer.  "
        />
        <Time
          title="Job Hunting"
          date="Present"
          context="Currently looking for a job related in Web development particularly Front-End, Back-End or Full Stack. Help me fill this gap before graduation !"
        />
        <Time
          title="Graduation"
          date="Oct. 16, 2024"
          context="Will be graduating at Bataan Peninsula State University with a degree of Bachelor of Computer Science Major In Software Development."
        />
      </div>
    </div>
  );
}

function Time({ title, date, context }: TimeProps) {
  return (
    <div className="time relative pl-2 sm:w-1/2 sm:pl-12">
      <div className="relative mb-8 rounded-lg bg-dark-950 p-5 before:absolute after:absolute after:-inset-0.5 after:-z-10 after:rounded-lg after:bg-accent max-sm:ml-10">
        <TimePointer />
        <p className="font-bold italic">{title}</p>
        <p className="text-xs text-gray-500">{date}</p>
        <p className="mt-4 text-sm text-gray-500">{context}</p>
      </div>
    </div>
  );
}

function TimePointer() {
  return (
    <div className="timepointer absolute -left-[16px] z-50 size-7 -translate-x-[0px] rotate-[315deg] border-2 border-solid border-primary before:absolute before:size-[calc(100%+3px)] before:bg-dark-950"></div>
  );
}

function Header() {
  return (
    <p className="mb-6 text-center text-2xl font-bold tracking-widest sm:text-3xl 2xl:col-span-full">
      Timeline
    </p>
  );
}

// TYPES
interface TimeProps {
  title: string;
  date: string;
  context: string;
}

export default memo(Timeline);
