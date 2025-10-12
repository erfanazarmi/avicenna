import Image from "next/image";
import { organizers } from "@/app/lib/data";
import { SectionTitle } from "@/app/ui/section-title";

export default function Organizers() {
  return (
    <section className="flex flex-col items-center justify-center gap-14 w-full relative">
      <div id="organizers" className="absolute top-0 -translate-y-6 lg:-translate-y-20"></div>

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
            key={organizer.last_name}
            className="
              flex flex-col lg:flex-row w-full max-w-[540px] lg:h-[240px] p-6
              bg-white dark:bg-[#131336] shadow-xl/20 rounded-xl
            "
          >
            <div className="aspect-square w-full lg:w-auto lg:h-full lg:mr-4 rounded-md bg-gray-300"></div>
            <div className="w-full pt-4 lg:pt-0 lg:pl-4">
              <div className="space-y-1 w-full">
                <div className="text-lg font-semibold [word-spacing:0.1em]">
                  {`${organizer.first_name} ${organizer.last_name}`}
                </div>
                <div className="text-gray-700 dark:text-gray-400">
                  {organizer.job_title}
                </div>
              </div>
              <div className="space-y-4 mt-4 p-1 pt-4 border-t-1 border-gray-300 dark:border-gray-700">
                {organizer.companies
                  ?.sort((a, b) => {
                    const aEx = a.is_previous ? 1 : 0;
                    const bEx = b.is_previous ? 1 : 0;
                    return aEx - bEx;
                  })
                  .map((company, index) => (
                    <div key={index} className="flex items-center gap-3">
                      {company.logo &&
                        (company.logo.dark ? (
                          <>
                            <Image
                              src={company.logo.light}
                              alt=""
                              width={20}
                              height={20}
                              className="dark:hidden"
                            />
                            <Image
                              src={company.logo.dark}
                              alt=""
                              width={20}
                              height={20}
                              className="hidden dark:block"
                            />
                          </>
                        ) : (
                          <Image
                            src={company.logo.light}
                            alt=""
                            width={20}
                            height={20}
                          />
                        ))}
                      <p className="leading-none font-medium">
                        <span>{company.is_previous ? "Ex " : ""}</span>
                        {company.name}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
