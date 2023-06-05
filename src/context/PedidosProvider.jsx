import { useState, useEffect, createContext } from "react";

const PedidosContext = createContext();

const PedidosProvider = ({ children }) => {
  return (
    <PedidosContext.Provider
      value={
        {
          // State
          // Funciones
        }
      }
    >
      {children}
    </PedidosContext.Provider>
  );
};

export { PedidosProvider };
export default PedidosContext;
