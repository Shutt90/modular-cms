import React from 'react'
import { useRouter } from 'next/router';

function Title() {
    const router = useRouter();
    const page = router.query;

    return (
    <div>
        <h1>Editting {page.title}</h1>
        <div className="container">
            <form method="POST" action={`/api/edit/page/${page.id}`}>
            <label htmlFor={`pagetitle-${page.id}`}>Title</label>
            <input type="text" value={`${page.title}`} id={`pagetitle-${page.id}`}></input>
            <label htmlFor={`pagecontent-${page.id}`}>Priority</label>
            <textarea value={`${page.content}`} id={`pagecontent-${page.id}`}></textarea>
            <label htmlFor={`pageprio-${page.id}`}>Priority</label>
            <input type="text" value={`${page.priority}`} id={`pageprio-${page.id}`}></input>
            <label htmlFor={`pagetitle-${page.id}`}>Active?</label>
            <select id={`pageactive-${page.id}`}>
                <option selected="selected" value="true">Yes</option>
                <option value="false">No</option>
            </select>

            </form>
        </div>
    </div>
    )
}

export default Title