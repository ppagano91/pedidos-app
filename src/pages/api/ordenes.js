import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient();

  // Obtener Ordenes/Pedidos
  if (req.method === "GET") {
    const ordenes = await prisma.orden.findMany({
      where: {
        estado: false,
      },
    });
    res.status(200).json(ordenes);
  }

  // TAREA OBTENER LAS ORDENES CON ESTADO TRUE Y VER CUANTO DINERO EN CAJA DEBE HABER

  // Crear Ordenes/Pedidos
  if (req.method === "POST") {
    const orden = await prisma.orden.create({
      data: {
        nombre: req.body.nombre,
        total: req.body.total,
        pedido: req.body.pedido,
        fecha: req.body.fecha,
      },
    });
    res.status(200).json(orden);
  }

  // const ordenes = await prisma.orden.findMany({
  //     include: {
  //     productos: true,
  //     },
  // });
  // res.status(200).json(ordenes);
}
