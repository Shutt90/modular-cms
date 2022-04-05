const data = require('../data/data')
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
    for(let page of data.pages) {
        await prisma.page.create({
            data: page
        })
    }
}

main().catch(e => {
    console.log(e);
    process.exit(1);
}).finally(() => {
    prisma.$disconnect();
})