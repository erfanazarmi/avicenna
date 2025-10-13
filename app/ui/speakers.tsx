import Image from "next/image";
import { speakers } from "@/app/lib/data";
import { SectionTitle } from "@/app/ui/section-title";

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
        <div className="2xl:flex-1 hidden 2xl:block self-start mt-80">
          <Image
            src="/horn-1.png"
            alt=""
            width={160}
            height={160}
            className="float-right"
          />
        </div>

        <div className="2xl:flex-3 grid lg:grid-cols-2 gap-6 lg:gap-10 rounded-xl">
          {speakers.map((speaker) => (
            <div
              key={speaker.last_name}
              className="
                w-full max-w-[460px] p-4
                bg-white dark:bg-[#1c1c42] shadow-xl/20 rounded-xl
              "
            >
              <div className="flex">
                <div className="aspect-square h-[100px] rounded-md bg-gray-300 flex-shrink-0"></div>
                <div className="space-y-1 w-full p-1 pl-4">
                  <div className="font-semibold [word-spacing:0.1em]">
                    {speaker.first_name}
                    {" "}<br className="sm:hidden" />
                    {speaker.last_name}
                  </div>
                  <div className="text-sm text-gray-700 dark:text-gray-400">
                    {speaker.job_title}
                  </div>
                </div>
              </div>
              <div className="space-y-4 mt-4 p-1 pt-4 border-t-1 border-gray-300 dark:border-gray-700">
                {speaker.companies
                  ?.sort((a, b) => {
                    const aEx = a.is_previous ? 1 : 0;
                    const bEx = b.is_previous ? 1 : 0;
                    return aEx - bEx;
                  })
                  .map((company, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2"
                    >
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
          ))}
        </div>

        <div className="2xl:flex-1 hidden 2xl:block self-end mb-110">
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
