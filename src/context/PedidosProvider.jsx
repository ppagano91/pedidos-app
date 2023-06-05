import { useState, useEffect, createContext } from "react";
import axios from "axios";

const PedidosContext = createContext();

const PedidosProvider = ({ children }) => {
  const [categorias, setCategorias] = useState([])
  const [categoriaActual, setCategoriaActual] = useState({})
  
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

  const handleClickCategoria = (id) => {
    const categoria = categorias.filter(cat => cat.id === id);
    console.log(categoria)
    setCategoriaActual(categoria[0]);
  }

  return (
    <PedidosContext.Provider
      value={
        {
          categorias,
          categoriaActual,
          handleClickCategoria
        }
      }
    >
      {children}
    </PedidosContext.Provider>
  );
};

export { PedidosProvider };
export default PedidosContext;
