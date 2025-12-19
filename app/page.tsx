import Image from "next/image";
import Link from "next/link";
import linkedin from "@/app/public/socialmedia/linkedin1.svg"
import instagram from "@/app/public/socialmedia/instagram1.svg"
import HomeMain from "@/components/Home/HomeMain";


export default function HomePage() {
  return (
      <div className="flex flex-col sm:flex-row  h-full flex-1 justify-center items-center bg-gray-900 shadow-2xl p-5">
       <HomeMain />
      </div>
  );
}