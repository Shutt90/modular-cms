import {addInput, addSubmit} from '/helpers/inputHelper';
import { removedUndefined } from '/helpers/stringHelpers';

function CategoriesEditForm({model}) {
  return (
    //This needs editing to be dynamic action
    <form method="POST" className="tickbox-form" action={`/api/edit/product/${model.id}`}>
      

    </form>
  )
}

export default CategoriesEditForm