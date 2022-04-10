import { PrismaClient } from "@prisma/client"
import Link from 'next/link'
import { decapitalize } from "../../helpers/stringHelpers"

function Products({products}) {
  return (
    <div className="auth-container">
      <h1 className="auth-title">Products</h1>
      <div className="auth-container">
        {products.map(product => {
          return (
            <Link key={product.id} href={{
              query: product,
              pathname:`/auth/edit/product/${decapitalize(product.title.trim())}`,
              }}>
                <a className="flex-col text-med" >
                  <h4>{product.title}</h4>
                </a>
            </Link>
            )
          })
        }       
      </div>
    </div>
  )
}

export default Products

export async function getServerSideProps(context) {

  const prisma = new PrismaClient
  const products = await prisma.product.findMany({
    orderBy: [
      {
        priority: 'asc',
      }
    ],
  })
  products.forEach(product => {
    delete product.createdAt
    delete product.updatedAt
  })
  
  return {
    props: { products }
  }

}
