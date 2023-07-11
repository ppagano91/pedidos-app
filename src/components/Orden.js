import React from "react";
import Image from "next/image";
import { formatearDinero } from "@/helpers";

const Orden = ({ orden }) => {
  const { id, nombre, total, pedido } = orden;
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

            {/* <p className="text-lg font-bold">{platillo.cantidad}</p>
            <p className="text-lg font-bold">{platillo.nombre}</p>
            <p className="text-lg font-bold">{platillo.precio}</p> */}
          </div>
        ))}
      </div>
      <div className="md:flex md:items-center md:justify-between my-10">
        <p className="mt-5 font-black text-4xl text-amber-500">
          Total a pagar: {formatearDinero(total)}
        </p>
      </div>
      {/* <div className="flex justify-between">
        <p className="text-lg font-bold">Total:</p>
        <p className="text-lg font-bold">{total}</p>
      </div> */}
    </div>
  );
};

export default Orden;
