import SubmitButton from "../comps/SubmitButton"
import { decapitalize, removeSpaces } from "./stringHelpers"

const addInput = function(type = 'text', name, prop, propId, labelText) {
    // example 
    // <label htmlFor={`pagetitle-${page.id}`}>Title</label>
    // <input type="text" value={`${page.title}`} id={`pagetitle-${page.id}`}></input>

    if(type === 'text') {

        return (
            <>
                <label htmlFor={`${name}-${removeSpaces(decapitalize(labelText))}-${propId}`}>{labelText}</label>
                <input type={type} defaultValue={`${prop}`} id={`${name}-${removeSpaces(decapitalize(labelText))}-${propId}`}></input>
            </>
        )
    } else if (type === 'textarea') {
        return (
            <>
                <label htmlFor={`${name}-${removeSpaces(decapitalize(labelText))}-${propId}`}>{labelText}</label>
                <textarea defaultValue={`${prop}`} id={`${name}-${removeSpaces(decapitalize(labelText))}-${propId}`}></textarea>
            </>
        )

    }

}


const addDropdown = function(options = Array, name, propId, propSelected, labelText) {

    if(propSelected === null) {
        return (
            <>  
                <label htmlFor={`${name}-${propId}`}>{labelText}</label>
                <select id={`${name}-${propId}`} name={`${name}-${propId}`}>
                    {options.map((option) => {
                        return (
                            <option key={propId}>{option}</option>
                        )
                    })}
                </select>
            </>
        )
        
    } else {
        return (
            <>  
                <label htmlFor={`${name}-${propId}`}>{labelText}</label>
                <select id={`${name}-${propId}`} defaultValue={propSelected} onChange={(e) => e.preventDefault()} name={`${name}-${propId}`}>
                    {options.map((option) => {
                        return (
                            <option key={`select-${propId}`} >{option}</option>
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