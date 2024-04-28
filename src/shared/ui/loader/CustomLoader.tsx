import styles from './CustomLoader.module.scss'

const CustomLoader = () => {
	return (
		<div className={styles.container}>
			<span className={styles.loader}></span>
		</div>
	)
}

export default CustomLoader
