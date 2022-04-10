import { capitalize } from '../helpers/stringHelpers'
import styles from '/styles/containers/tabs.module.css'
import Tab from '../comps/Tab';

function Tabs({tabs = Array}) {
  return (
    <div className={styles.container}>
        {tabs.map(tab => {
                return (
                    <Tab onClick={(e) => console.log(e)} name={capitalize(tab)}/>
                )
            })
        }
    </div>
  )
}

export default Tabs