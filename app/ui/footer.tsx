import Image from "next/image";

export default function Footer() {
  return (
    <>
      <div className="h-8 w-full bg-[url('/border-2.png')] bg-repeat bg-contain"></div>
      <footer className="flex justify-center items-center gap-2 p-8 text-sm text-gold bg-neutral-800 dark:bg-neutral-900">
        <div>
          <Image
            src="/bird.png"
            alt=""
            width={40}
            height={40}
          />
        </div>
        <div>
          Designed & Developed by
          <br className="block sm:hidden"/>{" "}
          <a
            href="https://www.linkedin.com/in/erfanazarmi"
            target="_blank"
            className="underline underline-offset-3"
          >
            Erfan Azarmi
          </a>
        </div>
      </footer>
    </>
  );
}
