import styles from "./index.module.scss"
import error from "./error.gif"


const ErrorPage =()=>{
    return (
        <div className={styles.ErrorPage}>
            <img className={styles.img}src={error} alt="error 404" />
        </div>
    )
}

export default ErrorPage