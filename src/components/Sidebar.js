import React from "react";
import Image from "next/image";
import usePedidos from "../hooks/usePedidos";
import Categoria from "./Categoria";

const Sidebar = () => {
  const {categorias} = usePedidos();
  return (
    <>
      <Image
        width={300}
        height={100}
        src="/assets/img/logo.svg"
        alt="Imagen logotipo"
      />
      <nav className="mt-10 ">       
        {categorias.map((categoria) => 
          (          
              <Categoria key={categoria.id} categoria={categoria} />          
          ))
        }
        </nav>
    </>
  );
};

export default Sidebar;
