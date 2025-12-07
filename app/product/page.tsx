import { IJD } from "@/app/types/types"
import Image from "next/image";
import fastfood from "../../assets/images/fastfood.2.webp"
import Link from "next/link";
import Productitmeinpage from "@/component/Productitmeinpage";



export default async function Product() {

  const resulet = await fetch("http://localhost:3001/posts")
  const data = await resulet.json() as IJD[]
 
  return (
    <div >

      <div className="bg-black w-full h-20 rounded-full flex justify-center items-center mt-25 mb-5 ">
        <h1 className="text-white font-extrabold">
          Welcome to fast food !
        </h1>
      </div>
 

      {/* //////////////////////// */}

      <div className="overflow-y-scroll shadow shadow-gray-950 rounded-2xl  mb-10 grid grid-cols-4 h-150 gap-2">

  {
          data.map(item => (<Link  key={item.id} href={`/product/${item.id}`}><Productitmeinpage {...item} /> </Link>))
        }
      </div>


      {/* //////////////////////////////////// */}

      <div className=" shadow shadow-gray-950 h-110  rounded-3xl flex  justify-center items-center">
        <div className="w-1/2  h-100 mx-4">
          <h1 className="text-8xl font-extrabold my-2 ">about us</h1>

          <h2 className=" font-bold my-2 text-2xl ">
            Fast food offers people quick, convenient meals that fit into busy lives. The experience is familiar and consistent, giving customers comfort in knowing exactly what to expect. Beyond the food, it creates social spaces where friends, families, and communities come together.
          </h2>
        </div>
        <div className="w-1/2  h-100 flex justify-center items-center mx-8">
          <Image src={fastfood} alt="fastfood image" className="w-full h-100 rounded " />
        </div>

      </div>





    </div>
  );
}
