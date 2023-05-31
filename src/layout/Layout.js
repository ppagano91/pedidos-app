import Sidebar from "@/components/Sidebar";
import Head from "next/head";
export default function Home({ children, pagina }) {
  return (
    <>
      <Head>
        <title>Café - {pagina}</title>
        <meta name="description" content="Café" />
      </Head>
      <div className="md:flex">
        <aside className="md:w-4/12 xl:w-1/4 2xl:1/5">
          <Sidebar />
        </aside>
        <main className="md:w-8/12 xl:w-3/4 2xl:4/5 h-screen overflow-y-scroll">
          {children}
        </main>
      </div>
    </>
  );
}
