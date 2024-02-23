import { LoaderIcon } from 'lucide-react'

import styles from '@shared/styles/Fields.module.scss'

const CustomLoader = () => {
	return (
		<div className={styles.loaderContainer}>
			<LoaderIcon className={styles.loader} />
		</div>
	)
}

export default CustomLoader
