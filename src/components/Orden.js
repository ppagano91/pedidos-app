import React from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Image from "next/image";
import { formatearDinero } from "@/helpers";

const Orden = ({ orden }) => {
  const { id, nombre, total, pedido } = orden;

  const completarOrden = async (ordenId) => {
    try {
      if (confirm(`¿Estás seguro de completar la orden #${ordenId}?`)) {
        const url = `/api/ordenes/${ordenId}`;
        const data = await axios.post(url);
        toast.success("Orden Lista");
      }
    } catch (error) {
      // console.log(error.response.data.message);
      toast.error("Hubo un error");
    }
  };

  const eliminarOrden = async (ordenId) => {
    try {
      if (confirm(`¿Estás seguro de eliminar la orden #${ordenId}?`)) {
        // FALTA IMPLEMENTAR ELIMINAR ORDEN. ¿SE ELIMINA O SE MARCA COMO ELIMINADA EN DB?
        // const url = `/api/ordenes/${ordenId}`;
        // const data = await axios.delete(url);
        toast.error("Orden Eliminada");
      }
    } catch (error) {
      // console.log(error.response.data.message);
      toast.error("Hubo un error");
    }
  };

  return (
    <div className="border p-10 space-y-2">
      <h3 className="text-2xl font-bold">
        Orden: #{id}{" "}
        {orden.estado ? (
          <span className="text-lg font-bold bg-green-500 text-white">
            Completado
          </span>
        ) : (
          <span className="text-lg font-bold p-1 bg-red-500 text-white">
            Pendiente
          </span>
        )}
      </h3>

      <p className="text-lg font-bold">Cliente: {nombre}</p>
      <div>
        {pedido.map((platillo) => (
          <div
            key={platillo.id}
            className="py-3 flex border-b last-of-type:border-0 items-center"
          >
            <div className="w-32">
              <Image
                width={400}
                height={500}
                src={`/assets/img/${platillo.imagen}.jpg`}
                alt={`Imagen del platillo ${platillo.nombre}`}
              />
            </div>
            <div className="p-5 space-y-2">
              <h4 className="text-xl font-bold text-amber-500">
                {platillo.nombre}
              </h4>
              <p className="text-lg font-bold">Cantidad {platillo.cantidad}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="md:flex md:items-center md:justify-between my-10">
        <p className="mt-5 font-black text-4xl text-amber-500">
          Total a pagar: {formatearDinero(total)}
        </p>
        <div className="flex flex-col gap-1">
          <button
            className="bg-indigo-600 hover:bg-indigo-800 text-white mt-5 md:mt-0 py-3 px-5 uppercase font-bold rounded-lg"
            type="button"
            onClick={() => completarOrden(id)}
          >
            Completar Orden
          </button>
          <button
            className="bg-red-600 hover:bg-red-800 text-white mt-5 md:mt-0 py-3 px-5 uppercase font-bold rounded-lg"
            type="button"
            onClick={() => eliminarOrden(id)}
          >
            Eliminar Orden
          </button>
        </div>
      </div>
    </div>
  );
};

export default Orden;
