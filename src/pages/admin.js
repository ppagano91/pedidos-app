import useSWR from "swr";
import axios from "axios";
import AdminLayout from "@/layout/AdminLayout";
import Orden from "../components/Orden";

export default function Admin() {
  const fetcher = () => axios.get("/api/ordenes").then((res) => res.data);
  const { data, error, isLoading } = useSWR("/api/ordenes", fetcher, {
    refreshInterval: 100,
  });

  return (
    <AdminLayout pagina={"Administración"}>
      <h1 className="text-4xl font-black">Panel de Administración</h1>
      <p className="text-2xl my-10">Administra tus órdenes</p>
      {data && data.length ? (
        data.map((orden) => <Orden key={orden.id} orden={orden} />)
      ) : (
        <p>No hay órdenes pendientes</p>
      )}
    </AdminLayout>
  );
}
