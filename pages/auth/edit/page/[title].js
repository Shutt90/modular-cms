import React from 'react'
import { useRouter } from 'next/router';
import {BiArrowBack} from 'react-icons/bi';
import Link from 'next/link'
import { addInput } from '../../../../helpers/inputHelper';

function Title() {
    const router = useRouter();
    const page = router.query;

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
                <label htmlFor={`pageactive-${page.id}`}>Active?</label>
                <select id={`pageactive-${page.id}`}>
                    <option selected={page.active ? "selected" : ""} value="true">Yes</option>
                    <option selected={!page.active ? "selected" : ""} value="false">No</option>
                </select>
                {addInput('text', page.metatitle, page.id, 'Meta Title')}
                {addInput('textarea', page.metadesc, page.id, 'Meta Description')}
                {addInput('text', page.metakeywords, page.id, 'Meta Keywords')}
                <input type="submit" value="Confirm"></input>
            </form>
        </div>
    </div>
    )
}

export default Title