import { useState, useEffect, createContext } from "react";
import axios from "axios";

const PedidosContext = createContext();

const PedidosProvider = ({ children }) => {
  const [categorias, setCategorias] = useState([])
  
  const obtenerCategorias = async () => {
    try {
      const {data} = await axios.get("/api/categorias");      
      setCategorias(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    obtenerCategorias();
  }, []);

  return (
    <PedidosContext.Provider
      value={
        {
          categorias
        }
      }
    >
      {children}
    </PedidosContext.Provider>
  );
};

export { PedidosProvider };
export default PedidosContext;
