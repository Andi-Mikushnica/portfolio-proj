import HomeMain from "@/components/Home/HomeMain";


export default function HomePage() {
  return (
      <div className="flex flex-col sm:flex-row  h-full flex-1 justify-center items-center bg-gray-900 shadow-2xl p-5">
       <HomeMain />
      </div>
  );
}