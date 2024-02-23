import { HealthGroupService } from '@entities/HealthGroup/health-group.service.ts'

import {
	useCreateHealthGroup,
	useDeleteHealthGroup,
	useGetHealthGroup,
	useGetHealthGroups,
	useUpdateHealthGroup
} from './health-group.query'
import { IHealthGroup, TypeHealthGroupForm } from './health-group.types'

export {
	HealthGroupService,
	useCreateHealthGroup,
	useDeleteHealthGroup,
	useGetHealthGroup,
	useGetHealthGroups,
	useUpdateHealthGroup
}

export type { IHealthGroup, TypeHealthGroupForm }
