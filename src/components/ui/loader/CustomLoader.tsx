import { LoaderIcon } from 'lucide-react'

import styles from '@/app/styles/Fields.module.scss'

const CustomLoader = () => {
	return (
		<div className={styles.loaderContainer}>
			<LoaderIcon className={styles.loader} />
		</div>
	)
}

export default CustomLoader
