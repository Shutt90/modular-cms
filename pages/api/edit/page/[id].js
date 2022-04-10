const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient;

export default async function pageUpdate(req, res) {

    try {       
        const {id} = req.query;
        const idInt = parseInt(id)
        
        await prisma.page.update({
            where: {
                id: idInt
            },
            data: {
                id: idInt,
                title: req.body.title,
                content: req.body.content,
                priority: parseInt(req.body.priority),
                active: req.body.active,
                metatitle: req.body.metatitle,
                metadesc: req.body.metadesc,
                metakeywords: req.body.metakeywords
            }
        })

        res.status(200).json({message: 'Uploaded project'})
    }catch(e) {
        console.error(e);
        res.status(500).json({error: 'Please try again later'})
    }
}