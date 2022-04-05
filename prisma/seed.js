const data = require('../data/data')
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function seed() {

    const validPage = await prisma.page.findUnique({
        where: {
            title: data.pages[0].title
        }
    })

    if(!validPage) {
        for(let page of data.pages) {
            await prisma.page.create({
                data: page,
            })
        }
    }

    const validCategory = await prisma.category.findUnique({
        where: {
            title: data.categories[0].title
        }
    })

    if(!validCategory) {
        for(let category of data.categories) {
            await prisma.category.create({
                data: category,
            })
        }
    }    

}


seed().catch(e => {
    console.log(e);
    process.exit(1);
}).finally(() => {
    prisma.$disconnect();
})