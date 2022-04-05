import React from 'react'
import { useRouter } from 'next/router';
import {BiArrowBack} from 'react-icons/bi';
import Link from 'next/link'

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
                <label htmlFor={`pagetitle-${page.id}`}>Title</label>
                <input type="text" value={`${page.title}`} id={`pagetitle-${page.id}`}></input>
                <label htmlFor={`pagecontent-${page.id}`}>Content</label>
                <textarea value={`${page.content}`} id={`pagecontent-${page.id}`}></textarea>
                <label htmlFor={`pageprio-${page.id}`}>Priority</label>
                <input type="text" value={`${page.priority}`} id={`pageprio-${page.id}`}></input>
                <label htmlFor={`pageactive-${page.id}`}>Active?</label>
                <select id={`pageactive-${page.id}`}>
                    <option selected={page.active ? "selected" : ""} value="true">Yes</option>
                    <option selected={!page.active ? "selected" : ""} value="false">No</option>
                </select>
                <label htmlFor={`pagemetatitle-${page.id}`}>Meta Title</label>
                <input type="text" value={`${page.title}`} id={`pagemetatitle-${page.id}`}></input>
                <label htmlFor={`pagemetakey-${page.id}`}>Meta Description</label>
                <textarea value={`${page.content}`} id={`pagemetakey-${page.id}`}></textarea>
                <label htmlFor={`pagemetadesc-${page.id}`}>Meta Keywords (seperate with a comma)</label>
                <input type="text" value={`${page.title}`} id={`pagemetadesc-${page.id}`}></input>
                <input type="submit" value="Confirm"></input>
            </form>
        </div>
    </div>
    )
}

export default Title