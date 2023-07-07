import React from "react";
import Layout from "@/layout/Layout";

export default function Total() {
  return (
    <Layout pagina="Total y Confirmar Pedido">
      <h1 className="text-4xl font-black">Total y Confirmar Pedido</h1>
      <p className="text-2xl my-10">Confirma tu pedido</p>
      <form>
        <div>
          <label
            htmlFor="nombre"
            className="block uppercase text-slate-800 font-bold text-xl"
          >
            Nombre
          </label>

          <input
            type="text"
            id="nombre"
            className="w-full bg-gray-200 rounded-md lg:w-1/3 p-2 mt-2"
          />
        </div>
        <div className="mt-10">
          <p className="text-2xl">
            Total a pagar {""}
            <span className="font-bold">$ 3000</span>
          </p>
        </div>
        <div className="mt-5">
          <input
            className="bg-indigo-600 w-full lg:w-auto px-5 py-2 rounded uppercase font-bold text-white text-center"
            value={"Confirmar Pedido"}
          />
        </div>
        {/* <div>
          <label
            htmlFor="email"
            className="block uppercase text-slate-800 font-bold text-xl mt-5"
          >
            Email
          </label>

          <input
            type="email"
            id="email"
            className="w-full bg-gray-200 rounded-md lg:w-1/3 p-2 mt-2"
          />
        </div> */}
      </form>
    </Layout>
  );
}
