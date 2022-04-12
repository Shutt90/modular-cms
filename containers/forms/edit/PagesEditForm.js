import {addInput, addDropdown, addSubmit} from '/helpers/inputHelper';
import { removedUndefined } from '/helpers/stringHelpers';

function PagesEditForm({model}) {
  const active = ['true', 'false']
  return (
    <form method="POST" className="edit-form" action={`/api/edit/page/${model.id}`}>
        {addInput('text', 'title', removedUndefined(model.title), model.id, 'Title')}
        {addInput('textarea', 'content', removedUndefined(model.content), model.id, 'Content')}
        {addInput('text', 'priority', model.priority, model.id, 'Priority')}
        {addDropdown(active, 'active', model.id, model.active,  'Active?', true)}
        {addInput('text','metatitle', removedUndefined(model.metatitle), model.id, 'Meta Title')}
        {addInput('textarea','metadesc', removedUndefined(model.metadesc), model.id, 'Meta Description')}
        {addInput('text','metakeywords', removedUndefined(model.metakeywords), model.id, 'Meta Keywords')}
        {addSubmit()}
    </form>
  )
}

export default PagesEditForm