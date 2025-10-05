import Image from "next/image";
import { organizers } from "@/app/lib/data";
import { SectionTitle } from "@/app/ui/section-title";
import { BuildingOffice2Icon } from "@heroicons/react/24/outline";

export default function Organizers() {
  return (
    <section className="flex flex-col items-center justify-center gap-14 w-full relative">
      <Image
        src="/table.png"
        alt=""
        width={260}
        height={260}
      />

      <SectionTitle text="organizers"/>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 w-full">
        {organizers.map((organizer) => (
          <div
            key={organizer.name}
            className="
              flex flex-col lg:flex-row w-full max-w-[540px] lg:h-[240px] p-6
              bg-white dark:bg-[#131336] shadow-xl/20 rounded-xl
            "
          >
            <div className="aspect-square w-full lg:w-auto lg:h-full lg:mr-4 rounded-md bg-gray-300"></div>
            <div className="p-4">
              <p className="text-lg font-semibold">{organizer.name}</p>
              <p className="text-gray-700 dark:text-gray-400">{organizer.job_title}</p>
              <div className="flex items-center pt-2 gap-1">
                <BuildingOffice2Icon className="w-4 text-gray-500" />
                <p>{organizer.company}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
