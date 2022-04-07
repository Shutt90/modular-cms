import styles from '/styles/comps/submit.module.css'

function SubmitButton() {
  return (
    <input type="submit" className={styles.input} value="Confirm"></input>
  )
}

export default SubmitButton