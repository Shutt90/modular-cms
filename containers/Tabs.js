import { capitalize } from '../helpers/stringHelpers'
import styles from '/styles/containers/tabs.module.css'
import Tab from '../comps/Tab';
import { useState, useEffect } from 'react';
import PagesEdit from '/containers/forms/edit/PagesEditForm';
import { useRouter } from 'next/dist/client/router';

function Tabs({tabs = Array, model}) {
    const router = useRouter();
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
                        <Tab key={tab + index} onClick={e => setActiveTab(index)} name={capitalize(tab)}/>
                    )
                })
            }
        </div>

        <div className={`container`} id={`${tabs[0]}`}>
            <PagesEdit model={model}/>
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