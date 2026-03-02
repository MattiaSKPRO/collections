import Image from "next/image";
import Link from "next/link";
import Prova from "@/components/Prova";
export default function Home() {
  return (
    <>
    <h1 className="bg-blue-400 text-center">Ciao a tutti !</h1>
    
    <Link href={"contatti"} className="bg-gray-600 rounded-lg shadow-xl p-2 inline-block mt-3">
    bottone
    </Link>
    
  <Prova></Prova>
    
    
    
    
    
    
    
    </>
  
  );
}
