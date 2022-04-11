import { addInput } from "../../../helpers/inputHelper"

function ProductsEditForm({model}) {
  const active = ['true', 'false']

  return (
    <form method="POST" className="edit-form" action={`/api/edit/product/${model.id}`}>
        {addInput('text', 'title', removedUndefined(model.title), model.id, 'Title')}
        {addInput('textarea', 'content', removedUndefined(model.content), model.id, 'Content')}
        {addInput('text', 'priority', model.priority, model.id, 'Priority')}
        {addDropdown(active, 'active', model.id, model.active,  'Active?', true)}
        {addSubmit()}
    </form>
  )
}

export default ProductsEditForm