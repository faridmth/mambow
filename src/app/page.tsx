import Image from "next/image";
import Navbar from "./_components/Navbar";
import Main from "./_components/Main";
import AboutUs from "./_components/AboutUs";
import Dishes from "./_components/Dishes";
import OpneningHours from "./_components/OpneningHours";
import NewsLetter from "./_components/NewsLetter";
import Footer from "./_components/Footer";
export default function Home() {
  return (
    <main className=" h-auto w-full bg-[#f8f2df] ">
      <Navbar/>
      <Main/>
      <OpneningHours/>
      <AboutUs/>
      <Dishes/>
      <NewsLetter/>
      <Footer/>
    </main>
  );
}
