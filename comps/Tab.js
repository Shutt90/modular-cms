import styles from '/styles/comps/tab.module.css'

function Tab({name}) {
  return (
    <div className={styles.tab} onClick={e => console.log(e)}>
        <h3 className={styles.title}>{name}</h3>
    </div>
  )
}

export default Tab