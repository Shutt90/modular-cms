import { PrismaClient } from "@prisma/client"
import Link from 'next/link';
import { decapitalize } from "../../helpers/stringHelpers"

function Categories({categories}) {
  return (
    <div className="auth-container">
      <h1 className="auth-title">Categories</h1>
      <div className="auth-container">
        {categories.map(category => {
          return (
            <Link key={category.id} href={{
              query: category,
              pathname:`/auth/modules/product-categories/${decapitalize(category.title.trim())}`,
              }}>
                <a className="flex-col text-med" >
                  <h4>{category.title}</h4>
                </a>
            </Link>
            )
          })
        }       
      </div>
    </div>
  )
}

export default Categories

export async function getServerSideProps(context) {

  const prisma = new PrismaClient

  const categories = await prisma.category.findMany({
    include: {
      Product: true,
    }
  })

  categories.forEach(category => {
    delete category.createdAt
    delete category.updatedAt
  })

  return {
    props: { categories }
  }

}
