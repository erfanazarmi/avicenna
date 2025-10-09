import Image from "next/image";

export default function Location() {
  return (
    <section className="flex flex-col items-center justify-center gap-20 w-full">
      <div className="w-full max-w-[600px] flex flex-col">
        <Image
          src="/cloud-1.png"
          alt=""
          width={200}
          height={200}
          className="self-center"
        />
        <Image
          src="/cloud-2.png"
          alt=""
          width={100}
          height={100}
          className="self-start"
        />
        <Image
          src="/cloud-3.png"
          alt=""
          width={200}
          height={200}
          className="self-end"
        />
      </div>

      <div className="w-full max-w-[1000px] h-140 flex items-center justify-center rounded-xl bg-[url('/trinity-college-toronto.jpg')] bg-cover bg-no-repeat bg-center">
        <div className="w-full h-full flex flex-col items-center justify-center gap-6 p-10 pt-40 bg-black/10 rounded-xl">
          <p className="text-center text-xl font-bold uppercase tracking-wide text-white text-shadow-xs text-shadow-black">
            We look forward to seeing you at {" "}
            <br className="hidden md:block" />
            Trinity College, Toronto!
          </p>
          <a className="cursor-pointer px-4 py-2 font-bold text-gray-200 bg-navy rounded-xl">
            Reserve Your Spot
          </a>
        </div>
      </div>

      <Image
        src="/bird.png"
        alt=""
        width={80}
        height={80}
      />
    </section>
  );
}
