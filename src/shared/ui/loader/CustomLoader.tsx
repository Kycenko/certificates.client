import { LoaderIcon } from 'lucide-react'
import { memo } from 'react'

import styles from './CustomLoader.module.scss'

const CustomLoader = memo(() => {
	return (
		<div className={styles.container}>
			<LoaderIcon className={styles.loader} />
		</div>
	)
})

export default CustomLoader
