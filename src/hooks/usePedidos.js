import { useContext } from "react";
import PedidoContext from "../context/PedidoContext";

const usePedidos = () => {
  const pedidoContext = useContext(PedidoContext);
  return pedidoContext;
};
export default usePedidos;
