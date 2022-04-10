import { capitalize } from '../helpers/stringHelpers'
import styles from '/styles/containers/tabs.module.css'
import Tab from '../comps/Tab';
import { addInput, addDropdown, addSubmit } from '/helpers/inputHelper';
import { removedUndefined } from '/helpers/stringHelpers';
import { useState, useEffect } from 'react';


function Tabs({tabs = Array, model}) {
    const active = ['true', 'false']
    const [activeTab, setActiveTab] = useState(0)

    useEffect(() => {
        for(let i = 0; i < tabs.length; i++) {
            document.getElementById(tabs[i]).style.display = 'none'
        }
        document.getElementById(tabs[activeTab]).style.display = 'block'
    
      return () => {
        
      }
    }, [activeTab])
    

  return (
    <>
        <div className={styles.container}>
            {tabs.map((tab, index) => {
                    return (
                        <Tab onClick={e => setActiveTab(index)} name={capitalize(tab)}/>
                    )
                })
            }
        </div>

        <div className={`container`} id={`${tabs[0]}`}>
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
        </div>

        <div className={`container`} id={`${tabs[1]}`}>
            <h2>{tabs[1]}</h2>
        </div>

        <div className={`container`} id={`${tabs[2]}`}>
            <h2>{tabs[2]}</h2>
        </div>
    </>
  )
}

export default Tabs