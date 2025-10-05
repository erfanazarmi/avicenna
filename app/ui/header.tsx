import Image from "next/image";

export default function Header() {
  return (
    <header className="flex flex-col xl:flex-row items-center justify-center xl:gap-10 p-12 lg:pt-26 bg-navy">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
        <div>
          <Image
            src="/hero-image.png"
            alt=""
            width={480}
            height={480}
          />
        </div>

        <div className="text-center lg:text-left">
          <h1 className="font-cinzel leading-none text-6xl font-medium text-gold my-3">
            Avicenna
            <br />
            Academy
          </h1>
          <p className="text-xl text-gray-300 lg:max-w-[500px]">
            A <strong>computer science</strong> and <strong>tech</strong> academy{" "}
            <br className="hidden lg:block" />
            for Persian-speaking learners based in Toronto
          </p>
          <div className="flex flex-row items-center justify-center mt-8">
            <Image
              src="/birds.png"
              alt=""
              width={130}
              height={130}
              className="hidden lg:block mr-2"
            />
            <button className="cursor-pointer px-4 py-2 rounded-xl text-lg font-medium text-navy bg-gold">
              Join the Bootcamp
            </button>
          </div>
        </div>
      </div>

      <div className="lg:hidden xl:block w-[1px] h-[60px] xl:h-[320px] my-8 xl:my-0 xl:mx-10 bg-gray-500"></div>
      <div className="hidden lg:block xl:hidden w-full h-[1px] m-16 bg-gray-700"></div>

      <div>
        <Image
          src="/trinity-college-toronto-logo.png"
          alt="Trinity College, University of Toronto"
          width={200}
          height={200}
          className="lg:w-full lg:max-w-[220px]"
        />
      </div>
    </header>
  );
}
