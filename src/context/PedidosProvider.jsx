import { useState, useEffect, createContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const PedidosContext = createContext();

const PedidosProvider = ({ children }) => {
  const [categorias, setCategorias] = useState([]);
  const [categoriaActual, setCategoriaActual] = useState({});
  const [producto, setProducto] = useState({});
  const [modal, setModal] = useState(false);
  const [pedido, setPedido] = useState([]);

  const obtenerCategorias = async () => {
    try {
      const { data } = await axios.get("/api/categorias");
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
    const categoria = categorias.filter((cat) => cat.id === id);
    console.log(categoria);
    setCategoriaActual(categoria[0]);
  };

  const handleSetProducto = (producto) => {
    setProducto(producto);
  };

  const handleChangeModal = () => {
    setModal(!modal);
  };

  //{categoriaId, Imagen, ...producto} => Este fragmento de código tomar una copia del objeto producto sin los campos que están  que no necesito para el pedido (ejemplo categoriaId, Imagen)
  const handleAgregarPedido = ({ categoriaId, ...producto }) => {
    if (pedido.some((productoSatate) => productoSatate.id === producto.id)) {
      // Actualizar cantidad
      const pedidoActualizado = pedido.map((productoSatate) =>
        productoSatate.id === producto.id ? producto : productoSatate
      );
      setPedido(pedidoActualizado);
      toast.success("Producto actualizado");
    } else {
      // Agregar nuevo producto al pedido
      setPedido([...pedido, producto]);
      toast.success("Producto agregado al pedido");
    }

    setModal(false);
  };

  const handleChangePaso = (paso) => {
    setPaso(paso);
  };

  return (
    <PedidosContext.Provider
      value={{
        categorias,
        categoriaActual,
        handleClickCategoria,
        producto,
        handleSetProducto,
        modal,
        handleChangeModal,
        handleAgregarPedido,
        pedido,
      }}
    >
      {children}
    </PedidosContext.Provider>
  );
};

export { PedidosProvider };
export default PedidosContext;
