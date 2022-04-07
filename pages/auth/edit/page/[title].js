import React from 'react'
import { useRouter } from 'next/router';
import {BiArrowBack} from 'react-icons/bi';
import Link from 'next/link'
import { addInput, addDropdown, addSubmit } from '../../../../helpers/inputHelper';

function Title() {
    const router = useRouter();
    const page = router.query;

    const active = ['true', 'false']

    return (
    <div className="container">
        <div className="flex align-center justify-between">
            <h1 className="margin-left10">Editting {page.title}</h1>
            <Link className="pad10" href={'/auth/pages/'}>
                <a>
                    <BiArrowBack size={50} />
                </a>
            </Link>
        </div>
        <div className="container">
            <form method="POST" className="edit-form" action={`/api/edit/page/${page.id}`}>
                {addInput('text', page.title, page.id, 'Title')}
                {addInput('textarea', page.content, page.id, 'Content')}
                {addInput('text', page.priority, page.id, 'Priority')}
                {addDropdown(active, 'active', page.id, page.active,  'Active?', true)}
                {addInput('text', page.metatitle, page.id, 'Meta Title')}
                {addInput('textarea', page.metadesc, page.id, 'Meta Description')}
                {addInput('text', page.metakeywords, page.id, 'Meta Keywords')}
                {addSubmit()}
            </form>
        </div>
    </div>
    )
}

export default Title