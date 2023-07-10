import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient();
  if (req.method === "POST") {
    const orden = await prisma.orden.create({
      data: {
        nombre: req.body.nombre,
        total: req.body.total,
        pedido: req.body.pedido,
        fecha: req.body.fecha,
      },
    });
    res.json(orden);
  } else {
    res.json({ message: "You are not posting" });
  }

  // const ordenes = await prisma.orden.findMany({
  //     include: {
  //     productos: true,
  //     },
  // });
  // res.status(200).json(ordenes);
}
