import Menu from "@/app/ui/menu";
import Header from "@/app/ui/header";
import Overview from "@/app/ui/overview";
import Organizers from "@/app/ui/organizers";
import Speakers from "@/app/ui/speakers";
import Location from "@/app/ui/location";
import Footer from "@/app/ui/footer";

export default function Home() {
  return (
    <>
      <Menu />
      <Header />
      <main className="flex flex-col items-center gap-30 px-10 py-20">
        <Overview />
        <Organizers />
        <Speakers />
        <Location />
      </main>
      <Footer />
    </>
  );
}
