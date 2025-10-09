import Image from "next/image";
import { speakers } from "@/app/lib/data";
import { SectionTitle } from "@/app/ui/section-title";
import { BuildingOffice2Icon } from "@heroicons/react/24/outline";

export default function Speakers() {
  return (
    <section className="flex flex-col items-center justify-start gap-14 w-full relative">
      <div id="speakers" className="absolute top-0 -translate-y-6 lg:-translate-y-20"></div>

      <Image
        src="/hats.png"
        alt=""
        width={300}
        height={300}
      />

      <SectionTitle text="speakers"/>

      <div className="flex justify-center items-center gap-14">
        <div className="2xl:flex-1 hidden 2xl:block self-start mt-60">
          <Image
            src="/horn-1.png"
            alt=""
            width={160}
            height={160}
            className="float-right"
          />
        </div>

        <div className="2xl:flex-4 grid lg:grid-cols-2 gap-6 lg:gap-10 rounded-xl">
          {speakers.map((speaker) => (
            <div
              key={speaker.name}
              className="
                flex w-full max-w-[500px] h-full p-4
                bg-white dark:bg-[#131336] shadow-xl/20 rounded-xl
              "
            >
              <div className="aspect-square h-[100px] rounded-md bg-gray-300"></div>
              <div className="px-4">
                <p className="font-semibold">{speaker.name}</p>
                <p className="text-gray-700 dark:text-gray-400">{speaker.job_title}</p>
                <div className="flex items-start pt-2 gap-1">
                  <BuildingOffice2Icon className="w-4 flex-shrink-0 text-gray-500" />
                  <p className="leading-none">{speaker.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="2xl:flex-1 hidden 2xl:block self-end mb-60">
          <Image
            src="/horn-2.png"
            alt=""
            width={400}
            height={400}
          />
        </div>
      </div>
    </section>
  );
}
