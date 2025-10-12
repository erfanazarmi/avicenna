import Image from "next/image";

export default function Header() {
  return (
    <header className="flex flex-col items-center">
      <div className="flex flex-col justify-end items-center h-dvh w-full text-center">
        <div className="relative w-full flex-1 bg-[url('/header.png')] bg-no-repeat bg-cover bg-center bg-transparent">
          <div className="absolute bottom-0 left-0 w-full h-32 sm:h-60 bg-gradient-to-b from-transparent to-background"></div>
        </div>
        <div className="transition -translate-y-10 space-y-6 px-10">
          <h1 className="text-center font-cinzel text-5xl sm:text-6xl font-medium leading-none text-[#b88f4a] dark:text-[#f2c464]">
            Avicenna
            <br />
            Academy
          </h1>
          <p className="text-lg sm:text-xl">
            A computer science and tech academy for Persian-speaking learners based in Toronto
          </p>
          <button className="cursor-pointer px-4 py-2 rounded-xl sm:text-lg font-medium text-white dark:text-black bg-neutral-800 dark:bg-neutral-100">
            Join the Bootcamp
          </button>
        </div>
      </div>
      <div className="flex items-center mt-10 px-10">
        <Image
          src="/tree-3.png"
          alt=""
          width={240}
          height={240}
        />
      </div>
    </header>
  );
}
