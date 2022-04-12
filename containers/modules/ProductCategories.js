import { PrismaClient } from "@prisma/client"

function ProductCategories({model}) {
    const cat = model.categoryId
    for (const property in model) {
        console.log(`${property}: ${model[property]}`);
    }

  return (
    <div>

    </div>
  )
}

export default ProductCategories