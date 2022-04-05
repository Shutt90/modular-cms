import { PrismaClient } from "@prisma/client"
import Link from 'next/link'
import { decapitalize } from "../../helpers/stringHelpers"

function Pages({pages}) {
  return (
    <div className="auth-container">
      <h1 className="auth-title">Pages</h1>
      <div className="auth-container">
        {pages.map(page => {
          return (
            <Link key={page.id} href={`${decapitalize(page.title.trim())}`}>
                <a className="flex-col text-med" >
                  <h4>{page.title}</h4>
                </a>
            </Link>
            )
          })
        }       
      </div>
    </div>
  )
}

export default Pages

export async function getServerSideProps(context) {

  const prisma = new PrismaClient
  const pages = await prisma.page.findMany({
    orderBy: [
      {
        priority: 'asc',
      }
    ]
  })
  pages.forEach(page => {
    delete page.createdAt
    delete page.updatedAt
  })
  
  return {
    props: { pages }
  }

}
