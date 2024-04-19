import { LoaderIcon } from 'lucide-react'

import styles from './CustomLoader.module.scss'

const CustomLoader = () => {
	return (
		<div className={styles.container}>
			<LoaderIcon className={styles.loader} />
		</div>
	)
}

export default CustomLoader
