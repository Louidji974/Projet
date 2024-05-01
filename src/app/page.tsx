import Image from "next/image";
import Link from "next/link";

const addressId = 20

export default function Home() {
  return (
    <>
    <h2 className="text-center mt-10 font-bold text-blue-900 text-3xl">POWERADDRESS MANAGER</h2>
    <div className="shadow-md m-auto w-2/3 flex p-5 mt-10">
      <div className="w-1/3">
        {/* Filtres */}
        <h2 className="font-bold">Filtres</h2>
      </div>
      <div className="w-2/3">
        
        <h2 className="font-bold">Adresses</h2>
        <div className="p-2">
          <div className="grid grid-cols-7 grid-flow-row p-2 text-center m-2">
            <p className="font-bold">Numéro</p>
            <p className="font-bold">Rue</p>
            <p className="font-bold">Ville</p>
            <p className="font-bold">Lieu dit</p>
            <p className="font-bold">Pays</p>
            <p className="font-bold">Type de lieu</p>
          </div>
          <div className="grid grid-cols-7 grid-flow-row text-center border border-100-black p-2 m-2 items-center">
            <p>5</p>
            <p>Chemin du Général de Gaulle,</p>
            <p>Paris 15</p>
            <p>Domicile</p>
            <p>France</p>
            <p>Appartement</p>
            <Link href={`Edition/${addressId}`} className="border bg-red-500 border-radius-sm text-white font-bold w-2/3 p-2 rounded-lg m-auto">Edit</Link>
          </div>
          <div className="grid grid-cols-7 grid-flow-row text-center border border-100-black p-2 m-2">
            <p>63</p>
            <p>Avenue de Montélimart</p>
            <p>Fresnes</p>
            <p>Restaurant</p>
            <p>France</p>
            <p>Restaurant</p>
            <Link href={'Edition/'} className="border bg-red-500 border-radius-sm text-white font-bold w-2/3 p-2 rounded-lg m-auto">Edit</Link>
          </div>
        </div>
        
        
      </div>
    </div>
    </>
  );
}
