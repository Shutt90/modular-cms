import {addInput, addSubmit} from '/helpers/inputHelper';
import { removedUndefined } from '/helpers/stringHelpers';

function CategoriesEditForm({model}) {
  return (
    <form method="POST" className="edit-form" action={`/api/edit/page/${model.id}`}>
        {addInput('text', 'title', removedUndefined(model.title), model.id, 'Title')}
        {addInput('textarea', 'content', removedUndefined(model.content), model.id, 'Content')}
        {addSubmit()}
    </form>
  )
}

export default CategoriesEditForm