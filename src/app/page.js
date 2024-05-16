import Image from "next/image";
import dynamic from "next/dynamic";

const Card = dynamic(() => import("./components/Card"));

export default function Home() {
  return (
<main className="bg-myYellow w-full h-screen flex justify-center items-center">
  
  <Card />
  
  </main>
  );
}
