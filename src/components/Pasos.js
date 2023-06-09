import React from "react";
import { useRouter } from "next/router";
import usePedidos from "@/hooks/usePedidos";
usePedidos;

const pasos = [
  { paso: 1, nombre: "Menú", url: "/" },
  { paso: 2, nombre: "Resumen", url: "/resumen" },
  { paso: 3, nombre: "Datos y Total", url: "/total" },
];

const Pasos = () => {
  const { handleChangePaso, paso } = usePedidos();
  const router = useRouter();

  const calcularProgreso = () => {
    if (paso === 1) return 5;
    if (paso === 2) return 50;
    if (paso === 3) return 100;
  };
  return (
    <>
      <div className="flex justify-between mb-5">
        {pasos.map((paso) => (
          <button
            onClick={() => {
              router.push(paso.url);
              handleChangePaso(paso.paso);
            }}
            className="text-2xl font-bold"
            key={paso.paso}
          >
            {paso.nombre}
          </button>
        ))}
      </div>
      <div className="bg-gray-100 mb-10">
        <div
          className="rounded-full bg-amber-500 text-xs leading-none h-2 text-center text-white"
          style={{ width: `${calcularProgreso()}%` }}
        ></div>
      </div>
    </>
  );
};

export default Pasos;
