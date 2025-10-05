import Image from "next/image";

export default function Footer() {
  return (
    <>
      <div className="h-8 w-full bg-[url('/border-2.png')] bg-repeat bg-contain"></div>
      <footer className="flex flex-col justify-center items-center p-8 text-sm text-gold bg-navy">
        <div>
          <Image
            src="/square.png"
            alt=""
            width={160}
            height={160}
          />
        </div>
        <div>Designed & Developed by</div>
        <a
          href="https://github.com/erfanazarmi"
          target="_blank"
          className="underline underline-offset-3"
        >
          Erfan Azarmi
        </a>
      </footer>
    </>
  );
}
