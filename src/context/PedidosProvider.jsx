import { useState, useEffect, createContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const PedidosContext = createContext();

const PedidosProvider = ({ children }) => {
  const [categorias, setCategorias] = useState([]);
  const [categoriaActual, setCategoriaActual] = useState({});
  const [producto, setProducto] = useState({});
  const [modal, setModal] = useState(false);
  const [pedido, setPedido] = useState([]);
  const [nombre, setNombre] = useState("");

  const router = useRouter();

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
    router.push(`/`);
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

  const handleEditarCantidades = (id) => {
    const productoActualizar = pedido.filter((producto) => producto.id === id);
    setProducto(productoActualizar[0]);
    setModal(!modal);
  };

  const handleEliminarProducto = (id) => {
    if (confirm("¿Estás seguro de eliminar el producto?")) {
      const pedidoActualizado = pedido.filter((producto) => producto.id !== id);
      setPedido(pedidoActualizado);
      toast.error("Producto eliminado del pedido");
    }
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
        handleEditarCantidades,
        handleEliminarProducto,
        nombre,
        setNombre,
      }}
    >
      {children}
    </PedidosContext.Provider>
  );
};

export { PedidosProvider };
export default PedidosContext;
