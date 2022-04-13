import {addDropdown, addSubmit} from '/helpers/inputHelper';

function CategoriesEditForm({model}) {
  let options = []

  for (const property in model) {
    options.push(model.Product)
  }
  
  console.log
  return (
    //This needs editing to be dynamic action
    <form method="POST" className="tickbox-form" action={`/api/edit/product/${model.id}`}>      

      {addSubmit()}
    </form>
  )
}

export default CategoriesEditForm