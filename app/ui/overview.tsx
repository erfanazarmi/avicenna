import Image from "next/image";
import { info, topics } from "@/app/lib/data";
import { SectionTitle } from "@/app/ui/section-title";

export default function Overview() {
  return (
    <section className="flex flex-col items-center justify-center gap-14 w-full relative">
      <div id="overview" className="absolute top-0 -translate-y-6 lg:-translate-y-20"></div>

      <SectionTitle text="overview"/>

      <div className="flex flex-col md:flex-row items-start self-start md:self-center gap-3 text-neutral-900">
        {info.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.label}
              className="flex items-center justify-center gap-2 px-3 py-2 w-auto rounded-lg bg-gold"
            >
              <Icon className="w-5 text-neutral-800" />
              <p className="whitespace-nowrap">{item.value}</p>
            </div>
          );
        })}
      </div>

      <div className="flex flex-col space-y-6 w-full max-w-[1000px]">
        <p className="bg-background">
          This bootcamp is for anyone aiming to sharpen their problem-solving
          skills and succeed in <strong>technical interviews</strong>.
          Through weekly hands-on sessions, you'll build coding confidence,
          master <strong>algorithms and data structures</strong>, and tackle real
          problems from <em>LeetCode</em> and <em>HackerRank</em>.
        </p>
        <p className="bg-background">
          Each session is designed like a <b>mini-contest</b>: we
          cover core concepts, then jump into problem-solving and live coding.
          Participants learn by doing, collaborating, and receiving immediate
          feedback.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 w-full max-w-[1000px]">
        <div className="flex-1 flex justify-end lg:self-start">
          <Image
            src="/student.png"
            alt=""
            width={120}
            height={120}
          />
          <Image
            src="/tree-2.png"
            alt=""
            width={150}
            height={150}
            className="lg:hidden"
          />
        </div>

        <div
          className="
            flex-2 space-y-7 p-14 text-center
            bg-background bg-[url('/border-1.png')] bg-no-repeat bg-contain
            shadow-[inset_0_0_0_2px_#c69b66] border-2 border-[#c69b66] rounded-lg
          "
        >
          <h3 className="py-4 text-2xl whitespace-nowrap">- What you'll learn -</h3>
          {topics.map((topic) => (
            <div key={topic.title}>
              <div>
                <strong>{topic.title}</strong>
              </div>
              <div>{topic.items?.join(", ")}</div>
            </div>
          ))}
        </div>

        <div className="flex-1 lg:self-end">
          <Image
            src="/tree-1.png"
            alt=""
            width={180}
            height={180}
          />
        </div>
      </div>

      <div className="flex flex-col space-y-6 w-full max-w-[1000px]">
        <p className="bg-background">
          Beyond coding, we support your growth by hosting guest talks,
          creating networking opportunities,
          and helping with <b>resumes</b>, <b>cover letters</b>,
          and the <strong>job application process</strong>, while building a strong
          community of collaborative learners.
        </p>
        <p className="bg-background">
          By the end, you'll have a solid foundation in computer science and the
          confidence to succeed in the tech job market.
        </p>
      </div>
    </section>
  );
}
