// prisma/seed.ts
import { PrismaClient } from '@prisma/client'
import { hash } from 'argon2'

const prisma = new PrismaClient()

async function main() {
	await prisma.user.create({
		data: {
			login: 'admin123',
			password: await hash('admin123'),
			isAdmin: true
		}
	})

	await prisma.department.createMany({
		data: [
			{
				id: 1,
				name: 'ПОИТ'
			},
			{
				id: 2,
				name: 'Экономическое'
			},
			{
				id: 3,
				name: 'Юридическое'
			}
		]
	})

	await prisma.course.createMany({
		data: [
			{
				id: 1,
				number: 1,
				departmentId: 1
			},
			{
				id: 2,
				number: 2,
				departmentId: 1
			},
			{
				id: 3,
				number: 3,
				departmentId: 1
			},
			{
				id: 4,
				number: 4,
				departmentId: 1
			},
			{
				id: 5,
				number: 1,
				departmentId: 2
			},
			{
				id: 6,
				number: 2,
				departmentId: 2
			},
			{
				id: 7,
				number: 3,
				departmentId: 2
			},
			{
				id: 8,
				number: 4,
				departmentId: 2
			},

			{
				id: 9,
				number: 1,
				departmentId: 3
			},
			{
				id: 10,
				number: 2,
				departmentId: 3
			},
			{
				id: 11,
				number: 3,
				departmentId: 3
			},
			{
				id: 12,
				number: 4,
				departmentId: 3
			}
		]
	})
	// await prisma.group.createMany({
	// 	data: [
	// 		{ id: 1, name: 'Б-191' },
	// 		{ id: 2, name: 'Б-291' },
	// 		{ id: 3, name: 'Б-391' },
	// 		{ id: 4, name: 'Д-291' },
	// 		{ id: 5, name: 'Д-292' },
	// 		{ id: 6, name: 'Д-313' },
	// 		{ id: 7, name: 'Д-391' },
	// 		{ id: 8, name: 'К-191' },
	// 		{ id: 9, name: 'К-291' },
	// 		{ id: 10, name: 'К-391' },
	// 		{ id: 11, name: 'Л-191' },
	// 		{ id: 12, name: 'Л-192' },
	// 		{ id: 13, name: 'Л-291' },
	// 		{ id: 14, name: 'Л-292' },
	// 		{ id: 15, name: 'Л-391' },
	// 		{ id: 16, name: 'Л-392' },
	// 		{ id: 17, name: 'П-191' },
	// 		{ id: 18, name: 'П-192' },
	// 		{ id: 19, name: 'П-193' },
	// 		{ id: 20, name: 'П-194' },
	// 		{ id: 21, name: 'П-215' },
	// 		{ id: 22, name: 'П-291' },
	// 		{ id: 23, name: 'П-292' },
	// 		{ id: 24, name: 'П-293' },
	// 		{ id: 25, name: 'П-294' },
	// 		{ id: 26, name: 'П-315' },
	// 		{ id: 27, name: 'П-391' },
	// 		{ id: 28, name: 'П-392' },
	// 		{ id: 29, name: 'П-393' },
	// 		{ id: 30, name: 'П-394' },
	// 		{ id: 31, name: 'Т-191' },
	// 		{ id: 32, name: 'Т-192' },
	// 		{ id: 33, name: 'Т-193' },
	// 		{ id: 34, name: 'Т-194' },
	// 		{ id: 35, name: 'Т-195' },
	// 		{ id: 36, name: 'Т-196' },
	// 		{ id: 37, name: 'Т-197' },
	// 		{ id: 38, name: 'Т-218' },
	// 		{ id: 39, name: 'Т-219' },
	// 		{ id: 40, name: 'Т-291' },
	// 		{ id: 41, name: 'Т-292' },
	// 		{ id: 42, name: 'Т-293' },
	// 		{ id: 43, name: 'Т-294' },
	// 		{ id: 44, name: 'Т-295' },
	// 		{ id: 45, name: 'Т-296' },
	// 		{ id: 46, name: 'Т-297' },
	// 		{ id: 47, name: 'Т-318' },
	// 		{ id: 48, name: 'Т-319' },
	// 		{ id: 49, name: 'Т-391' },
	// 		{ id: 50, name: 'Т-392' },
	// 		{ id: 51, name: 'Т-393' },
	// 		{ id: 52, name: 'Т-394' },
	// 		{ id: 53, name: 'Т-395' },
	// 		{ id: 54, name: 'Т-396' },
	// 		{ id: 55, name: 'Э-191' },
	// 		{ id: 56, name: 'Э-212' },
	// 		{ id: 57, name: 'Э-291' },
	// 		{ id: 58, name: 'Э-312' },
	// 		{ id: 59, name: 'Э-391' }
	// 	]
	// })

	await prisma.healthGroup.createMany({
		data: [
			{
				id: 1,
				name: '1-я группа'
			},
			{
				id: 2,
				name: '2-я группа'
			},
			{
				id: 3,
				name: '3-я группа'
			},
			{
				id: 4,
				name: '4-я группа'
			},
			{
				id: 5,
				name: '5-я группа'
			}
		]
	})

	await prisma.physicalEducation.createMany({
		data: [
			{
				id: 1,
				name: 'ЛФК'
			},
			{
				id: 2,
				name: 'Основная'
			},
			{
				id: 3,
				name: 'Подготовительная'
			},
			{
				id: 4,
				name: 'СМГ'
			}
		]
	})
}

main()
	.catch(e => {
		console.error(e)
		process.exit(1)
	})
	.finally(async () => {
		await prisma.$disconnect()
	})
