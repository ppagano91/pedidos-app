export default async function handler(req, res) {    
    if (req.method === "POST") {
        console.log(req.body)
        res.json({ message: "You are posting" })
    }
    else{
        res.json({ message: "You are not posting" })
    }

    // const ordenes = await prisma.orden.findMany({
    //     include: {
    //     productos: true,
    //     },
    // });
    // res.status(200).json(ordenes);
    }