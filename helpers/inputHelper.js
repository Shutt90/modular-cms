const addInput = function(type = 'text', prop, propId, labelText) {
    // example 
    // <label htmlFor={`pagetitle-${page.id}`}>Title</label>
    // <input type="text" value={`${page.title}`} id={`pagetitle-${page.id}`}></input>

    if(type === 'text') {

        return (
            <>
                <label htmlFor={`${prop}-${propId}`}>{labelText}</label>
                <input type={type} value={`${prop}`} id={`${prop}-${propId}`}></input>
            </>
        )
    } else if (type === 'textarea') {
        return (
            <>
                <label htmlFor={`${prop}-${propId}`}>{labelText}</label>
                <textarea value={`${prop}`} id={`${prop}-${propId}`}></textarea>
            </>
        )

    }

}

export { addInput }