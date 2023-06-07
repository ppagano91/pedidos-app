import Head from "next/head";

import Modal from "react-modal";
import {ToastContainer} from "react-toastify"

import Sidebar from "@/components/Sidebar";
import ModalProducto from "@/components/ModalProducto";

import usePedidos from "@/hooks/usePedidos";

import "react-toastify/dist/ReactToastify.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  }
}

Modal.setAppElement("#__next");

export default function Home({ children, pagina }) {
  const {modal} = usePedidos();


  return (
    <>
      <Head>
        <title>Coffee Break - {pagina}</title>
        <meta name="description" content="Café" />
      </Head>
      <div className="md:flex max-w-12xl mx-auto">
        <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5">
          <Sidebar />
        </aside>
        <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll">
          <div className="p-10">
            {children}
          </div>
        </main>
      </div>
      {modal && (<Modal isOpen={modal} style={customStyles}><ModalProducto/></Modal>)}
      <ToastContainer/>
    </>
  );
}
