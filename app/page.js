import Image from "next/image";
import Link from "next/link";
import Prova from "@/components/Prova";
import Iscrizione from "@/components/Iscrizione";
import Card from "@/components/Card";
export default function Home() {
  return (
    <>
    
    <h1 className="bg-blue-400 text-center">Ciao a tutti !</h1>
    
    <Link href={"contatti"} className="bg-gray-600 rounded-lg shadow-xl p-2 inline-block mt-3">
    bottone
    </Link>
    
  <Prova></Prova>
    
    <Iscrizione></Iscrizione>
    
    <div className="flex flex-wrap justify-evenly">
    <Card></Card>
      
    <Card></Card>
      
    <Card></Card>
    
  </div>
</>
  );
}
