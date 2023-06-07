import { useState, useEffect, createContext } from "react";
import axios from "axios";

const PedidosContext = createContext();

const PedidosProvider = ({ children }) => {
  const [categorias, setCategorias] = useState([]);
  const [categoriaActual, setCategoriaActual] = useState({});
  const [producto, setProducto] = useState({});
  const [modal, setModal] = useState(false);
  
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

  useEffect(() => {
    setCategoriaActual(categorias[0]);
  }, [categorias]);

  const handleClickCategoria = (id) => {
    const categoria = categorias.filter(cat => cat.id === id);
    console.log(categoria)
    setCategoriaActual(categoria[0]);
  }

  const handleSetProducto = (producto) => {
    setProducto(producto);
  }

  const handleChangeModal = () => {
    setModal(!modal);
  }

  return (
    <PedidosContext.Provider
      value={
        {
          categorias,
          categoriaActual,
          handleClickCategoria,
          handleSetProducto,
          handleChangeModal
        }
      }
    >
      {children}
    </PedidosContext.Provider>
  );
};

export { PedidosProvider };
export default PedidosContext;
