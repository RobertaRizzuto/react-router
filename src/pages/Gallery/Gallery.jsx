import styles from "./index.module.scss"

const Gallery =()=>{
return (<div className={styles.Gallery}>
    <img className={styles.img} src="https://picsum.photos/200?1" alt="" />
    <img className={styles.img} src="https://picsum.photos/200?2" alt="" />
    <img className={styles.img} src="https://picsum.photos/200?3" alt="" />
    <img className={styles.img} src="https://picsum.photos/200?4" alt="" />
    <img className={styles.img} src="https://picsum.photos/200?5" alt="" />
    <img className={styles.img} src="https://picsum.photos/200?6" alt="" />
    <img className={styles.img} src="https://picsum.photos/200?7" alt="" />
    <img className={styles.img} src="https://picsum.photos/200?8" alt="" />
</div>)
}
export default Gallery