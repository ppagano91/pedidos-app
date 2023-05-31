import "@/styles/globals.css";
import { PedidosProvider } from "@/context/PedidosProvide";

export default function App({ Component, pageProps }) {
  return (
    <PedidosProvider>
      <Component {...pageProps} />
    </PedidosProvider>
  );
}
