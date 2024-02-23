import { IGroup } from '@entities/Group/group.types'
import { TypeGroupForm } from '@entities/Group/group.types.ts'

import {
	useCreateGroup,
	useDeleteGroup,
	useGetGroup,
	useGetGroups,
	useUpdateGroup
} from './group.queries'
import { GroupService } from './group.service'

export {
	GroupService,
	useCreateGroup,
	useDeleteGroup,
	useGetGroup,
	useGetGroups,
	useUpdateGroup
}

export type { IGroup, TypeGroupForm }
