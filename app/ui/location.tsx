import Image from "next/image";
import { SectionTitle } from "@/app/ui/section-title";

export default function Location() {
  return (
    <section className="flex flex-col items-center justify-center gap-10 p-3 sm:px-20 pb-10 sm:pb-20 w-full relative">
      <div id="location" className="absolute top-0 -translate-y-6 lg:-translate-y-20"></div>

      <Image
        src="/flag.png"
        alt=""
        width={200}
        height={200}
      />

      <SectionTitle text="location" />

      <div
        className="
          flex items-start justify-center w-full h-150 sm:h-200 rounded-md
          bg-[url('/trinity-college-toronto.jpg')] bg-cover bg-no-repeat bg-center
        "
      >
        <div className="flex flex-col items-center justify-center gap-10 mt-20">
          <div className="bg-white rounded-full w-42 sm:w-54 aspect-square flex items-center justify-center">
            <Image
              src="/trinity-college-toronto-logo.png"
              alt=""
              width={200}
              height={200}
              className="p-5"
            />
          </div>
          <a className="cursor-pointer px-4 sm:px-6 py-2 sm:py-3 w-full text-center text-base sm:text-lg font-medium text-gray-200 bg-navy rounded-xl">
            Reserve your spot
          </a>
        </div>
      </div>
    </section>
  );
}
