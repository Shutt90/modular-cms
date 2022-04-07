import SubmitButton from "../comps/SubmitButton"

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


const addDropdown = function(options = Array, name, propId, propSelected, labelText, haveSelected = false) {

    if(propSelected === null) {
        return (
            <>  
                <label htmlFor={`${name}-${propId}`}>{labelText}</label>
                <select id={`${name}-${propId}`} name={`${name}-${propId}`}>
                    {options.map((option) => {
                        return (
                            <option key={propId} value={option}>{option}</option>
                        )
                    })}
                </select>
            </>
        )
        
    } else {
        return (
            <>  
                <label htmlFor={`${name}-${propId}`}>{labelText}</label>
                <select id={`${name}-${propId}`} name={`${name}-${propId}`}>
                    {options.map((option) => {
                        return (
                            <option key={propId} selected={propSelected === option ? "selected" : ""} value={option}>{option}</option>
                        )
                    })}
                </select>
            </>
        )
    }
}

const addSubmit = function() {
    return (
        <SubmitButton/>
    )
}

export { addInput, addDropdown, addSubmit }