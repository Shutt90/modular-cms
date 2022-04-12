import { capitalize } from '../helpers/stringHelpers'
import styles from '/styles/containers/tabs.module.css'
import Tab from '../comps/Tab';
import { useState, useEffect } from 'react';
import PagesEdit from '/containers/forms/edit/PagesEditForm';
import ProductsEdit from '/containers/forms/edit/ProductsEditForm';
import { useRouter } from 'next/dist/client/router';
import ProductCategories from './modules/ProductCategories';
import CategoriesEdit from './forms/edit/CategoriesEditForm';
import CategoriesProducts from './forms/edit/CategoriesProductForm';

function Tabs({tabs = Array, model, modelName}) {
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

            {modelName === 'pages' ? <PagesEdit model={model}/> : '' }
            {modelName === 'products' ? <ProductsEdit model={model}/> : '' }
            {modelName === 'categories' ? <CategoriesEdit model={model}/> : '' }

        </div>

        <div className={`container`} id={`${tabs[1]}`}>
            <h2>{tabs[1]}</h2>
            {modelName === 'categories' ? <CategoriesProducts model={model}/> : '' }

        </div>

        <div className={`container`} id={`${tabs[2]}`}>
            <h2>{tabs[2]}</h2>
        </div>
    </>
  )
}

export default Tabs