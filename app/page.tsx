import Menu from "@/app/ui/menu";
import Header from "@/app/ui/header";
import Overview from "@/app/ui/overview";
import Organizers from "@/app/ui/organizers";
import Speakers from "@/app/ui/speakers";
import Footer from "@/app/ui/footer";

export default function Home() {
  return (
    <>
      <Menu />
      <Header />
      <main className="
        flex flex-col items-center gap-30 px-10 py-20
        bg-[radial-gradient(circle,rgba(0,0,0,0.3)_2px,transparent_2px)]
        dark:bg-[radial-gradient(circle,rgba(255,255,255,0.2)_2px,transparent_2px)]
        bg-[length:120px_120px]
      ">
        <Overview />
        <Organizers />
        <Speakers />
      </main>
      <Footer />
    </>
  );
}
