import { LoaderIcon } from 'lucide-react'

import styles from '@shared/styles/Fields.module.scss'

const Loader = () => {
	return (
		<div className={styles.loaderContainer}>
			<LoaderIcon className={styles.loader} />
		</div>
	)
}

export default Loader
