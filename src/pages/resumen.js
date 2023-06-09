import React from "react";
import Layout from "@/layout/Layout";
import usePedidos from "@/hooks/usePedidos";
import ResumenProducto from "@/components/ResumenProducto";

export default function Resumen() {
  const { pedido } = usePedidos();
  return (
    <Layout pagina="Resumen">
      <h1 className="text-4xl font-black">Resumen</h1>
      <p className="text-2xl my-10">Revisa tu pedido</p>
      {pedido.length === 0 ? (
        <p className="text-2xl mt-10">No hay productos</p>
      ) : (
        pedido.map((producto) => (
          <ResumenProducto key={producto.id} producto={producto} />
        ))
      )}
    </Layout>
  );
}
